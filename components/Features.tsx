interface FeatureCardProps {
    number: string;
    title: string;
    description: string;
}

const FeatureCard = ({ number, title, description }: FeatureCardProps) => {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-mono text-[#b4ff00]">
                {number}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl  font-bold text-foreground">
                {title}
            </h3>
            <p className="text-sm md:text-base  text-muted-foreground leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export const Features = () => {
    return (
        <div className="px-6 sm:px-8 py-12 sm:py-20">
            <div className="text-sm sm:text-base md:text-lg font-mono text-muted-foreground tracking-wider mb-8 sm:mb-12">
                / PROTOCOL
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
                <div className="md:border-r md:border-border">
                    <FeatureCard
                        number="01"
                        title="Zero-Knowledge Proofs"
                        description="Verify cross-chain state without revealing sensitive data. Cryptographic guarantees for every transaction."
                    />
                </div>
                <div className="md:border-r md:border-border">
                    <FeatureCard
                        number="02"
                        title="Intent-Based Routing"
                        description="Express what you want, not how to do it. Our solvers find optimal paths across all chains."
                    />
                </div>
                <div>
                    <FeatureCard
                        number="03"
                        title="Trust-Minimized Bridge"
                        description="No relayers, no multisigs. Pure cryptographic verification of cross-chain messages."
                    />
                </div>
            </div>
        </div>
    );
};
