interface StatItemProps {
  label: string;
  value: string;
}

const StatItem = ({ label, value }: StatItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-mono text-muted-foreground tracking-wider">{label}</span>
      <span className="text-2xl font-bold text-foreground font-mono">{value}</span>
    </div>
  );
};

export const StatsDisplay = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <StatItem label="CONNECTED CHAINS" value="42" />
      <StatItem label="INTENTS PROCESSED" value="2.1M" />
      <StatItem label="TOTAL VALUE LOCKED" value="$1.72B" />
      <StatItem label="TOTAL ASSETS" value="$8.22B" />
    </div>
  );
};
