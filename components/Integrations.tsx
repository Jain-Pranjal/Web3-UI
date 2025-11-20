const IntegrationCard = ({ name }: { name: string }) => {
  return (
    <div className="border border-border p-4 sm:p-6 flex items-center justify-center text-tech-gray hover:bg-secondary transition-colors hover:text-neon-green-dim dark:hover:text-neon-green">
      <span className="text-base font-bold tracking-wider select-none text-current">
        {name}
      </span>
    </div>
  );
};

export const Integrations = () => {
  return (
    <div className="px-6 sm:px-8 py-12 sm:py-20">
      <div className="text-sm sm:text-base md:text-lg font-mono text-muted-foreground tracking-wider mb-8 sm:mb-12">
        / INTEGRATIONS
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8">
        Trusted by Leading Protocols
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
        <IntegrationCard name="UNISWAP" />
        <IntegrationCard name="AAVE" />
        <IntegrationCard name="COMPOUND" />
        <IntegrationCard name="CURVE" />
        <IntegrationCard name="MAKER" />
        <IntegrationCard name="LIDO" />
        <IntegrationCard name="CHAINLINK" />
        <IntegrationCard name="1INCH" />
      </div>
    </div>
  );
};
