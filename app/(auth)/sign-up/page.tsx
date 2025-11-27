"use client";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthDithered } from "@/components/AuthDithered";
import Link from "next/link";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl border-x border-border">
          <Section withTopBorder withBottomBorder>
            <div className="grid md:grid-cols-2 min-h-[600px]">
              {/* Left Column - Graphics */}
              <div className="relative border-r border-border p-12 flex flex-col justify-center items-center bg-background">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mb-4 text-foreground font-mono">
                    JAINCO
                  </h2>
                  <p className="text-muted-foreground font-mono text-sm">
                    Decentralized Protocol Infrastructure
                  </p>
                </div>
                <AuthDithered />
              </div>

              {/* Right Column - Form */}
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2 text-foreground font-mono">
                    {isLogin ? "Login" : "Sign Up"}
                  </h1>
                  <p className="text-muted-foreground font-mono text-sm">
                    {isLogin
                      ? "Welcome back to the protocol"
                      : "Join the decentralized future"}
                  </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="font-mono"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-mono">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="font-mono"
                    />
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="font-mono">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        className="font-mono"
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full font-mono"
                    size="lg"
                  >
                    {isLogin ? "Login" : "Sign Up"}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      {isLogin
                        ? "Don't have an account? Sign up"
                        : "Already have an account? Login"}
                    </button>
                  </div>

                  <div className="text-center">
                    <Link
                        href="/"    
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      ← Back to home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Section>
        </div>
      </div>
  );
};

export default Auth;
