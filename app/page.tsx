import { Navigation } from "@/components/Navigation"
import { ChainLogos } from "@/components/Chains"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { LandingDithered } from "@/components/LandingDithered"
import { StatsDisplay } from "@/components/Stats"
import { Footer } from "@/components/Footer"
import { Developers } from "@/components/Developers"
import { Community } from "@/components/Community"
import { Integrations } from "@/components/Integrations"
import { Features } from "@/components/Features"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Container with max width for centered layout with side borders */}
      <div className="max-w-7xl mx-auto border-x border-border relative">
        <Section>
          <Navigation />
        </Section>

        {/* Hero Section */}
        <Section withTopBorder>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-20 border-r border-border lg:border-r-0">
            {/* Left column - Content */}
            <div className="flex flex-col justify-center gap-8 lg:border-r border-border lg:pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded w-fit bg-slate-50 dark:bg-white/5 border border-border dark:border-white/10  shadow-sm ">
                <span className="w-1.5 h-1.5 bg-[hsl(var(--neon-green))] rounded-full animate-pulse"></span>
                <span className="font-mono text-xs text-slate-900 dark:text-muted-foreground">
                  Layer-0 connectivity _
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Coordination Layer for All Chains
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Fast, verifiable, and trust-minimized interoperability. Bridge
                assets, route intents, and confirm proofs — without trusted
                relayers.
              </p>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-border hover:bg-secondary"
                >
                  Read Docs
                </Button>
                <Button className="bg-[#b4ff00] text-black hover:bg-[hsl(var(--neon-green-dim))]">
                  Launch Demo
                </Button>
              </div>

              {/* Chain logos */}
              <div className="mt-8">
                <ChainLogos />
              </div>
            </div>

            {/* Right column - Visualization */}
            <div className="flex items-center justify-center lg:pl-12">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <LandingDithered />
            </div>
          </div>
        </Section>

        {/* Stats Section */}
        <Section withTopBorder>
          <div className="px-8 py-12">
            <StatsDisplay />
          </div>
        </Section>


        <Section withTopBorder>
            <Features />
        </Section>

        <Section withTopBorder>
        <Developers />
        </Section>

        <Section withTopBorder>
        <Integrations />
        </Section>

        <Section withTopBorder>
        <Community />
        </Section>


        <Section withTopBorder>
        <Footer />
        </Section>
      </div>
    </div>
  )
}

export default Index
