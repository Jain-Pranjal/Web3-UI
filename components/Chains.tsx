
export const ChainLogos: React.FC<{ speed?: number; className?: string }> = ({
  speed = 12,
  className = "",
}) => {
  const group = (
    <div className="flex items-center gap-12 opacity-40 whitespace-nowrap shrink-0">
      <div className="text-tech-gray dark:text-white font-bold text-lg tracking-wider">SOLANA</div>
      <div className="text-tech-gray dark:text-white font-bold text-lg tracking-wider">POLYGON</div>
      <div className="text-tech-gray dark:text-white font-bold text-lg tracking-wider">ARBITRUM</div>
      <div className="text-tech-gray dark:text-white font-bold text-lg tracking-wider">PHANTOM</div>
      <div className="text-tech-gray dark:text-white font-bold text-lg tracking-wider">AVALANCHE</div>
      <div className="w-12 shrink-0" />
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className={`overflow-hidden w-full ${className}`}>
        {/* duplicate the group so the loop is continuous */}
        <div
          className="inline-flex gap-0 items-center animate-marquee"
          style={{ animationDuration: `${speed}s` }}
          aria-hidden={false}
        >
          {group}
          {group}
        </div>
      </div>
    </>
  );
};
