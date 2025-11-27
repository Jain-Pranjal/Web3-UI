"use client"

import { useEffect, useRef } from "react"

// 4x4 Bayer Matrix for the retro shading
const bayerMatrix = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
]

export const AuthDithered = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // CONFIGURATION
    const PIXEL_SIZE = 2 // Chunky pixels for readability

    let animationFrameId: number
    let time = 0

    // --- 3D MATH HELPERS ---
    const rotateX = (p: { x: number; y: number; z: number }, angle: number) => {
      const c = Math.cos(angle)
      const s = Math.sin(angle)
      return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c }
    }

    const rotateY = (p: { x: number; y: number; z: number }, angle: number) => {
      const c = Math.cos(angle)
      const s = Math.sin(angle)
      return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c }
    }

    // Signed Distance Function: Octahedron (The Diamond Shape)
    const sdOctahedron = (
      p: { x: number; y: number; z: number },
      s: number
    ) => {
      const pAbs = { x: Math.abs(p.x), y: Math.abs(p.y), z: Math.abs(p.z) }
      return (pAbs.x + pAbs.y + pAbs.z - s) * 0.57735027
    }

    // Signed Distance Function: Torus (The Ring)
    const sdTorus = (
      p: { x: number; y: number; z: number },
      t: { r: number; th: number }
    ) => {
      const q = Math.sqrt(p.x * p.x + p.z * p.z) - t.r
      return Math.sqrt(q * q + p.y * p.y) - t.th
    }

    const mapScene = (p: { x: number; y: number; z: number }) => {
      // Rotate the whole world slowly
      let pRot = rotateY(p, time * 0.5)
      pRot = rotateX(pRot, 0.5) // Tilt it forward

      // 1. The Core (Octahedron)
      // It pulsates slightly
      const pulse = 1.0 + Math.sin(time * 2) * 0.05
      const dCore = sdOctahedron(pRot, 0.8 * pulse)

      // 2. The Orbit Ring
      // Rotate the ring independently
      let pRing = rotateX(pRot, time)
      pRing = rotateY(pRing, time * 2)
      const dRing = sdTorus(pRing, { r: 1.3, th: 0.05 })

      return Math.min(dCore, dRing)
    }

    const resize = () => {
      canvas.width = Math.ceil(container.clientWidth / PIXEL_SIZE)
      canvas.height = Math.ceil(container.clientHeight / PIXEL_SIZE)
      ctx.imageSmoothingEnabled = false
    }

    const draw = () => {
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)
      const imageData = ctx.getImageData(0, 0, w, h)
      const data = imageData.data

      time += 0.02 // Slow, hypnotic speed

      // Lighting (Top Left)
      const lightDir = { x: -0.577, y: 0.577, z: -0.577 }

      // Raymarching Loop
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          // UV Coordinates
          const uvX = (x / w) * 2 - 1
          const uvY = -(y / h) * 2 + 1
          const aspect = w / h

          // Camera
          const ro = { x: 0, y: 0, z: 3.5 } // Ray Origin
          const rd = { x: uvX * aspect, y: uvY, z: -1.5 } // Ray Dir
          const rLen = Math.sqrt(rd.x ** 2 + rd.y ** 2 + rd.z ** 2)
          rd.x /= rLen
          rd.y /= rLen
          rd.z /= rLen

          let t = 0
          let hit = false

          // March
          for (let i = 0; i < 25; i++) {
            const p = {
              x: ro.x + rd.x * t,
              y: ro.y + rd.y * t,
              z: ro.z + rd.z * t,
            }
            const d = mapScene(p)

            if (d < 0.02) {
              hit = true

              // Normal Calc (Simplified)
              const e = 0.01
              const nx = mapScene({ x: p.x + e, y: p.y, z: p.z }) - d
              const ny = mapScene({ x: p.x, y: p.y + e, z: p.z }) - d
              const nz = mapScene({ x: p.x, y: p.y, z: p.z + e }) - d
              // Normalize
              const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz)
              const norm = { x: nx / nLen, y: ny / nLen, z: nz / nLen }

              // Diffuse Lighting
              let diff = Math.max(
                0,
                norm.x * lightDir.x + norm.y * lightDir.y + norm.z * lightDir.z
              )

              // Dithering
              const threshold = bayerMatrix[y % 4][x % 4] / 16
              const index = (y * w + x) * 4

              // Add a slight baseline so the shape is always visible (0.1)
              if (diff + 0.1 > threshold) {
                // Use same Neon Green as LandingDithered
                data[index] = 204 // R
                data[index + 1] = 255 // G
                data[index + 2] = 0 // B
                data[index + 3] = 255 // Alpha
              } else {
                data[index + 3] = 0
              }
              break
            }
            t += d
            if (t > 8) break
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)
      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener("resize", resize)
    resize()
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain opacity-90"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  )
}
