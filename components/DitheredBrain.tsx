"use client";

import { useEffect, useRef } from "react";

// Standard 4x4 Bayer Matrix for ordered dithering
// This creates the specific crosshatch pattern seen in the reference
const bayerMatrix = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

export const DitheredBrain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // CONFIG: 
    // Higher number = Bigger, blockier pixels (Cleaner look)
    // The reference image has quite large pixels.
    const PIXEL_SIZE = 3; 
    
    let animationFrameId: number;
    let time = 0;

    // 3D Math: Rotate point around axis
    const rotateX = (p: {x:number, y:number, z:number}, theta: number) => {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
    };

    const rotateY = (p: {x:number, y:number, z:number}, theta: number) => {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
    };

    // SDF for a Box (Signed Distance Function)
    // Returns distance from point p to the surface of box b
    const sdBox = (p: {x:number, y:number, z:number}, b: {x:number, y:number, z:number}) => {
      const dx = Math.abs(p.x) - b.x;
      const dy = Math.abs(p.y) - b.y;
      const dz = Math.abs(p.z) - b.z;
      const outside = Math.sqrt(
        Math.max(dx, 0) ** 2 + Math.max(dy, 0) ** 2 + Math.max(dz, 0) ** 2
      );
      const inside = Math.min(Math.max(dx, dy, dz), 0);
      return outside + inside;
    };

    // Calculate Normal (surface direction) for lighting
    // We need this to know which face is bright and which is dark
    const calcNormal = (p: {x:number, y:number, z:number}, rotateFn: any) => {
      const e = 0.01;
      // We temporarily reverse rotation to check the box in its local space
      // (Simplified normal approximation)
      return {
        x: sdBox({x:p.x+e, y:p.y, z:p.z}, {x:0.5,y:0.5,z:0.5}) - sdBox({x:p.x-e, y:p.y, z:p.z}, {x:0.5,y:0.5,z:0.5}),
        y: sdBox({x:p.x, y:p.y+e, z:p.z}, {x:0.5,y:0.5,z:0.5}) - sdBox({x:p.x, y:p.y-e, z:p.z}, {x:0.5,y:0.5,z:0.5}),
        z: sdBox({x:p.x, y:p.y, z:p.z+e}, {x:0.5,y:0.5,z:0.5}) - sdBox({x:p.x, y:p.y, z:p.z-e}, {x:0.5,y:0.5,z:0.5})
      };
    };

    const resize = () => {
      // Create a low-res buffer
      canvas.width = Math.ceil(container.clientWidth / PIXEL_SIZE);
      canvas.height = Math.ceil(container.clientHeight / PIXEL_SIZE);
      ctx.imageSmoothingEnabled = false; // Keep pixels sharp
    };

    const draw = () => {
      // 1. Clear Screen
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // 2. Get Pixel Buffer
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;

      time += 0.015; // Rotation Speed

      // Light Direction (Coming from top-right)
      const lightDir = { x: 0.577, y: 0.577, z: -0.577 }; 

      // 3. Raymarching Loop
      // For every pixel on the low-res canvas...
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          
          // Normalized coordinates (-1 to 1)
          const uvX = (x / w) * 2 - 1;
          const uvY = -(y / h) * 2 + 1; // Flip Y for 3D feel
          const aspect = w / h;
          
          // Camera Ray
          const ro = { x: 0, y: 0, z: 5 }; // Ray Origin (Camera position)
          const rd = { x: uvX * aspect, y: uvY, z: -1.5 }; // Ray Direction
          // Normalize RD
          const len = Math.sqrt(rd.x**2 + rd.y**2 + rd.z**2);
          rd.x /= len; rd.y /= len; rd.z /= len;

          let t = 0;
          let hit = false;
          let hitObj = 0; // 1 = Top Cube, 2 = Bottom Cube
          let p = { x:0, y:0, z:0 };

          // March the ray into the scene
          for (let i = 0; i < 25; i++) {
            p = {
              x: ro.x + rd.x * t,
              y: ro.y + rd.y * t,
              z: ro.z + rd.z * t
            };

            // --- SCENE DEFINITION ---
        


            // Cube 1: Top Right
            let p1 = { x: p.x - 1.2, y: p.y - 1.0, z: p.z }; // Offset position
            p1 = rotateY(p1, time); // Rotation
            p1 = rotateX(p1, time * 0.5);
            const d1 = sdBox(p1, {x: 1.0, y: 1.0, z: 1.0}); // Box Size

            // Cube 2: Bottom Left
            let p2 = { x: p.x + 1.2, y: p.y + 1.0, z: p.z }; // Offset position
            p2 = rotateY(p2, -time); // Counter-rotation
            p2 = rotateX(p2, -time * 0.5);
            const d2 = sdBox(p2, {x: 1.0, y: 1.0, z: 1.0}); // Box Size

            // Find closest
            const d = Math.min(d1, d2);

            if (d < 0.05) {
              hit = true;
              hitObj = d1 < d2 ? 1 : 2;
              break;
            }
            
            t += d;
            if (t > 20) break; // Too far
          }

          if (hit) {
            // --- LIGHTING CALCULATION ---
            
            // Recalculate point exactly at surface
            // Determine normal based on which object we hit
            let normal = {x:0, y:0, z:0};
            
            if (hitObj === 1) {
               let p1 = { x: p.x - 1.2, y: p.y - 1.0, z: p.z };
               p1 = rotateY(p1, time);
               p1 = rotateX(p1, time * 0.5);
               // This is a simplified "face normal" check for cubes
               // It snaps the lighting to faces to make it look cleaner (flat shading)
               const ax = Math.abs(p1.x); const ay = Math.abs(p1.y); const az = Math.abs(p1.z);
               if (ax > ay && ax > az) normal = {x: Math.sign(p1.x), y:0, z:0};
               else if (ay > ax && ay > az) normal = {x:0, y: Math.sign(p1.y), z:0};
               else normal = {x:0, y:0, z: Math.sign(p1.z)};
               
               // Rotate normal back to world space
               // (Strictly, we should use inverse rotation, but for flat shading visual it's fine)
            } else {
               let p2 = { x: p.x + 1.2, y: p.y + 1.0, z: p.z };
               p2 = rotateY(p2, -time);
               p2 = rotateX(p2, -time * 0.5);
               const ax = Math.abs(p2.x); const ay = Math.abs(p2.y); const az = Math.abs(p2.z);
               if (ax > ay && ax > az) normal = {x: Math.sign(p2.x), y:0, z:0};
               else if (ay > ax && ay > az) normal = {x:0, y: Math.sign(p2.y), z:0};
               else normal = {x:0, y:0, z: Math.sign(p2.z)};
            }

            // Simple Diffuse Lighting (Dot Product)
            // Range 0.0 to 1.0
            // We add 0.5 to normalize (-1..1 -> 0..1 roughly)
            let diff = (normal.x * lightDir.x + normal.y * lightDir.y + normal.z * lightDir.z);
            // Remap for aesthetics
            let intensity = (diff * 0.5 + 0.5); 
            
            // Distance fading (fog)
            intensity -= (t - 4) * 0.15;

            // --- DITHERING ---
            // Map pixel coordinate to Bayer Matrix (4x4)
            const threshold = bayerMatrix[y % 4][x % 4] / 16;

            const index = (y * w + x) * 4;

            // If the calculated light intensity is stronger than the threshold matrix...
            if (intensity > threshold) {
              // DRAW PIXEL (Neon Green)
              data[index] = 204;     // R
              data[index + 1] = 255; // G
              data[index + 2] = 0;   // B
              data[index + 3] = 255; // Alpha
            } else {
              // Transparent
              data[index + 3] = 0;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          // CRITICAL: This makes the small canvas scale up with hard edges
          imageRendering: "pixelated" 
        }}
      />
      {/* Radial overlay to fade the edges into black */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-dark/90 pointer-events-none" />
    </div>
  );
};

