import { GridBackground } from "@/components/GridBackground";
import { Navigation } from "@/components/Navigation";
import { DotVisualization } from "@/components/DotVisualization";
// import { StatsDisplay } from "@/components/StatsDisplay";
// import { ChainLogos } from "@/components/ChainLogos";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GridBackground>
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
                <div className="text-xs font-mono text-muted-foreground tracking-wider">
                  Layer-0 connectivity
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  The Coordination Layer for All Chains
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Fast, verifiable, and trust-minimized interoperability. Bridge assets, route intents, 
                  and confirm proofs — without trusted relayers.
                </p>
                
                <div className="flex gap-4">
                  <Button variant="outline" className="border-border hover:bg-secondary">
                    Read Docs
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Launch Demo
                  </Button>
                </div>
                
                {/* Chain logos */}
                <div className="mt-8">
                  {/* <ChainLogos /> */}
                </div>
              </div>
              
              {/* Right column - Visualization */}
              <div className="flex items-center justify-center lg:pl-12">
                <DotVisualization />
              </div>
            </div>
          </Section>
          
          {/* Stats Section */}
          <Section withTopBorder>
            <div className="px-8 py-12">
              {/* <StatsDisplay /> */}
            </div>
          </Section>
        </div>
      </GridBackground>
    </div>
  );
};

export default Index;
