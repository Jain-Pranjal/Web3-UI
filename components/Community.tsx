import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



export const Community = () => {
    return (
        <div className="px-6 sm:px-8 py-12 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6">
                    <div className="text-sm sm:text-base md:text-lg font-mono text-muted-foreground tracking-wider mb-8 sm:mb-12">
                        / COMMUNITY
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Join the Network
                    </h2>

                    <p className="text-sm  md:text-base text-muted-foreground leading-relaxed">
                        Connect with developers, validators, and users building the future
                        of cross-chain infrastructure. Share ideas, get support, and shape the protocol.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-24 border-border hover:bg-secondary flex flex-col gap-2">
                        <FaDiscord className="text-3xl sm:text-4xl" />
                        <span className="font-mono text-xs sm:text-sm">DISCORD</span>
                    </Button>
                    <Button variant="outline" className="h-24 border-border hover:bg-secondary flex flex-col gap-2">
                        <FaSquareXTwitter className="text-3xl sm:text-4xl" />
                        <span className="font-mono text-xs sm:text-sm">TWITTER</span>
                    </Button>
                    <Button variant="outline" className="h-24 border-border hover:bg-secondary flex flex-col gap-2">
                        <FaGithub className="text-3xl sm:text-4xl" />
                        <span className="font-mono text-xs sm:text-sm">GITHUB</span>
                    </Button>
                    <Button variant="outline" className="h-24 border-border hover:bg-secondary flex flex-col gap-2">
                        <FaBook className="text-3xl sm:text-4xl" />
                        <span className="font-mono text-xs sm:text-sm">BLOG</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
