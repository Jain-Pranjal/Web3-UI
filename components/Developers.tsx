import { Button } from "@/components/ui/button"

export const Developers = () => {
  return (
    <div className="px-6 sm:px-8 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <div className="text-sm sm:text-base md:text-lg font-mono text-muted-foreground tracking-wider mb-8 sm:mb-12">
            / DEVELOPERS
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Build with JAINCO
          </h2>

          <p className="text-sm  md:text-base text-muted-foreground leading-relaxed">
            Simple APIs, powerful infrastructure. Deploy cross-chain
            applications in minutes with our SDK and comprehensive
            documentation.
          </p>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              View Docs
            </Button>
            <Button className="bg-[#b4ff00] text-black hover:bg-[hsl(var(--neon-green-dim))]">
              Get API Key
            </Button>
          </div>
        </div>

        <div className="bg-card border border-border p-4 sm:p-6 font-mono text-xs sm:text-sm">
          <div className="text-neon-green-dim dark:text-neon-green mb-4">
            // Initialize Jainco client
          </div>
          <div className="text-foreground">
            <span className="text-neon-green-dim dark:text-neon-green">
              import
            </span>{" "}
            {"{ JaincoClient }"}{" "}
            <span className="text-neon-green-dim dark:text-neon-green">
              from
            </span>{" "}
            <span className="text-neon-green-dim dark:text-neon-green">
              '@Jainco/sdk'
            </span>
            ;
          </div>
          <div className="text-foreground mt-4">
            <span className="text-neon-green-dim dark:text-neon-green">
              const
            </span>{" "}
            client ={" "}
            <span className="text-neon-green-dim dark:text-neon-green">
              new
            </span>{" "}
            JaincoClient({"{"}
          </div>
          <div className="text-foreground ml-4">
            apiKey: process.env.Jainco_API_KEY,
          </div>
          <div className="text-foreground">{"}"});</div>

          <div className="text-neon-green-dim dark:text-neon-green mt-6 mb-4">
            // Bridge tokens
          </div>
          <div className="text-foreground">
            <span className="text-neon-green-dim dark:text-neon-green">
              await
            </span>{" "}
            client.bridge({"{"}
          </div>
          <div className="text-foreground ml-4">
            from:{" "}
            <span className="text-neon-green-dim dark:text-neon-green">
              'ethereum'
            </span>
            ,
          </div>
          <div className="text-foreground ml-4">
            to:{" "}
            <span className="text-neon-green-dim dark:text-neon-green">
              'arbitrum'
            </span>
            ,
          </div>
          <div className="text-foreground ml-4">
            token:{" "}
            <span className="text-neon-green-dim dark:text-neon-green">
              'USDC'
            </span>
            ,
          </div>
          <div className="text-foreground ml-4">
            amount:{" "}
            <span className="text-neon-green-dim dark:text-neon-green">
              '1000'
            </span>
          </div>
          <div className="text-foreground">{"}"});</div>
        </div>
      </div>
    </div>
  )
}
