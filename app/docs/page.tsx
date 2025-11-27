"use client"
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";


const docSections = [
  {
    title: "Getting Started",
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "quick-start", label: "Quick Start" },
      { id: "installation", label: "Installation" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { id: "architecture", label: "Architecture" },
      { id: "intent-routing", label: "Intent Routing" },
      { id: "zk-proofs", label: "ZK Proofs" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { id: "client-sdk", label: "Client SDK" },
      { id: "bridge-api", label: "Bridge API" },
      { id: "events", label: "Events" },
    ],
  },
];

const docContent: Record<string, { title: string; content: ReactNode }> = {
  introduction: {
    title: "Introduction to Axiom Zero",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Axiom Zero is a trust-minimized cross-chain messaging protocol that enables secure
          communication and asset transfers across multiple blockchain networks.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Built on zero-knowledge proofs and intent-based routing, Axiom provides developers
          with a simple yet powerful API to build cross-chain applications.
        </p>
      </>
    ),
  },
  "quick-start": {
    title: "Quick Start Guide",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Get up and running with Axiom Zero in under 5 minutes.
        </p>
        <div className="bg-card border border-border p-6 font-mono text-sm mb-6">
          <div className="text-primary mb-2">// Install the SDK</div>
          <div className="text-foreground">npm install @axiom/sdk</div>
        </div>
        <div className="bg-card border border-border p-6 font-mono text-sm">
          <div className="text-primary mb-2">// Initialize client</div>
          <div className="text-foreground">
            <span className="text-accent">import</span> {'{ AxiomClient }'}{" "}
            <span className="text-accent">from</span>{" "}
            <span className="text-neon-green">'@axiom/sdk'</span>;
          </div>
          <div className="text-foreground mt-4">
            <span className="text-accent">const</span> client ={" "}
            <span className="text-accent">new</span> AxiomClient({"{"}
          </div>
          <div className="text-foreground ml-4">
            apiKey: <span className="text-neon-green">'YOUR_API_KEY'</span>
          </div>
          <div className="text-foreground">{"}"});</div>
        </div>
      </>
    ),
  },
  installation: {
    title: "Installation",
    content: (
      <>
        <h3 className="text-xl font-bold text-foreground mb-4">Prerequisites</h3>
        <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
          <li>Node.js version 16 or higher</li>
          <li>npm or yarn package manager</li>
          <li>An Axiom API key (get one from the dashboard)</li>
        </ul>
        <h3 className="text-xl font-bold text-foreground mb-4">Install via npm</h3>
        <div className="bg-card border border-border p-6 font-mono text-sm mb-6">
          <div className="text-foreground">npm install @axiom/sdk</div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-4">Install via yarn</h3>
        <div className="bg-card border border-border p-6 font-mono text-sm">
          <div className="text-foreground">yarn add @axiom/sdk</div>
        </div>
      </>
    ),
  },
  architecture: {
    title: "Architecture Overview",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Axiom Zero uses a modular architecture consisting of three main layers:
        </p>
        <div className="space-y-4">
          <div className="border border-border p-4">
            <h4 className="text-foreground font-bold mb-2">Protocol Layer</h4>
            <p className="text-muted-foreground text-sm">
              Handles cross-chain message validation and routing using ZK proofs
            </p>
          </div>
          <div className="border border-border p-4">
            <h4 className="text-foreground font-bold mb-2">Consensus Layer</h4>
            <p className="text-muted-foreground text-sm">
              Maintains network state and ensures message finality
            </p>
          </div>
          <div className="border border-border p-4">
            <h4 className="text-foreground font-bold mb-2">Application Layer</h4>
            <p className="text-muted-foreground text-sm">
              Developer-facing SDK and APIs for building cross-chain dApps
            </p>
          </div>
        </div>
      </>
    ),
  },
  "intent-routing": {
    title: "Intent-Based Routing",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Intent routing allows users to express their desired outcome rather than
          specifying exact execution paths.
        </p>
        <div className="bg-card border border-border p-6 font-mono text-sm">
          <div className="text-primary mb-2">// Define an intent</div>
          <div className="text-foreground">
            <span className="text-accent">const</span> intent = {"{"}
          </div>
          <div className="text-foreground ml-4">
            action: <span className="text-neon-green">'swap'</span>,
          </div>
          <div className="text-foreground ml-4">
            fromToken: <span className="text-neon-green">'USDC'</span>,
          </div>
          <div className="text-foreground ml-4">
            toToken: <span className="text-neon-green">'ETH'</span>,
          </div>
          <div className="text-foreground ml-4">
            amount: <span className="text-neon-green">'1000'</span>,
          </div>
          <div className="text-foreground ml-4">
            minOutput: <span className="text-neon-green">'0.5'</span>
          </div>
          <div className="text-foreground">{"}"});</div>
          <div className="text-foreground mt-4">
            <span className="text-accent">await</span> client.executeIntent(intent);
          </div>
        </div>
      </>
    ),
  },
  "zk-proofs": {
    title: "Zero-Knowledge Proofs",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Axiom uses ZK-SNARKs to verify cross-chain transactions without revealing
          sensitive data or requiring trust in intermediaries.
        </p>
        <h3 className="text-xl font-bold text-foreground mb-4">Key Benefits</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Privacy-preserving transaction validation</li>
          <li>Minimal on-chain verification costs</li>
          <li>Trustless cross-chain messaging</li>
          <li>Scalable to any number of chains</li>
        </ul>
      </>
    ),
  },
  "client-sdk": {
    title: "Client SDK Reference",
    content: (
      <>
        <h3 className="text-xl font-bold text-foreground mb-4">AxiomClient</h3>
        <p className="text-muted-foreground mb-4">
          Main client class for interacting with the Axiom protocol.
        </p>
        <div className="bg-card border border-border p-6 font-mono text-sm mb-6">
          <div className="text-primary mb-2">// Constructor</div>
          <div className="text-foreground">
            <span className="text-accent">new</span> AxiomClient(config: AxiomConfig)
          </div>
          <div className="text-foreground mt-4">
            <span className="text-primary">// Parameters:</span>
          </div>
          <div className="text-muted-foreground ml-4">
            - apiKey: <span className="text-accent">string</span> (required)
          </div>
          <div className="text-muted-foreground ml-4">
            - network: <span className="text-accent">string</span> (optional, default: 'mainnet')
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-4">Methods</h3>
        <div className="bg-card border border-border p-6 font-mono text-sm">
          <div className="text-foreground mb-4">
            <span className="text-accent">async</span> bridge(params: BridgeParams)
          </div>
          <div className="text-foreground mb-4">
            <span className="text-accent">async</span> executeIntent(intent: Intent)
          </div>
          <div className="text-foreground">
            <span className="text-accent">async</span> getTransactionStatus(txId:{" "}
            <span className="text-accent">string</span>)
          </div>
        </div>
      </>
    ),
  },
  "bridge-api": {
    title: "Bridge API",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          REST API for bridging assets across chains.
        </p>
        <h3 className="text-xl font-bold text-foreground mb-4">POST /api/bridge</h3>
        <div className="bg-card border border-border p-6 font-mono text-sm mb-6">
          <div className="text-foreground">
            <span className="text-primary">// Request body</span>
          </div>
          <div className="text-foreground">{`{`}</div>
          <div className="text-foreground ml-4">
            <span className="text-neon-green">"from"</span>:{" "}
            <span className="text-neon-green">"ethereum"</span>,
          </div>
          <div className="text-foreground ml-4">
            <span className="text-neon-green">"to"</span>:{" "}
            <span className="text-neon-green">"arbitrum"</span>,
          </div>
          <div className="text-foreground ml-4">
            <span className="text-neon-green">"token"</span>:{" "}
            <span className="text-neon-green">"USDC"</span>,
          </div>
          <div className="text-foreground ml-4">
            <span className="text-neon-green">"amount"</span>:{" "}
            <span className="text-neon-green">"1000"</span>
          </div>
          <div className="text-foreground">{`}`}</div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-4">Response</h3>
        <div className="bg-card border border-border p-6 font-mono text-sm">
          <div className="text-foreground">{`{`}</div>
          <div className="text-foreground ml-4">
            <span className="text-neon-green">"transactionId"</span>:{" "}
            <span className="text-neon-green">"0x..."</span>,
          </div>
          <div className="text-foreground ml-4">
            <span className="text-neon-green">"status"</span>:{" "}
            <span className="text-neon-green">"pending"</span>,
          </div>
          <div className="text-foreground ml-4">
            <span className="text-neon-green">"estimatedTime"</span>: <span className="text-accent">300</span>
          </div>
          <div className="text-foreground">{`}`}</div>
        </div>
      </>
    ),
  },
  events: {
    title: "Events & Webhooks",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Subscribe to real-time events from the Axiom protocol.
        </p>
        <h3 className="text-xl font-bold text-foreground mb-4">Available Events</h3>
        <div className="space-y-4 mb-6">
          <div className="border border-border p-4">
            <div className="font-mono text-neon-green mb-2">bridge.initiated</div>
            <p className="text-muted-foreground text-sm">
              Fired when a bridge transaction is initiated
            </p>
          </div>
          <div className="border border-border p-4">
            <div className="font-mono text-neon-green mb-2">bridge.completed</div>
            <p className="text-muted-foreground text-sm">
              Fired when a bridge transaction is completed
            </p>
          </div>
          <div className="border border-border p-4">
            <div className="font-mono text-neon-green mb-2">intent.executed</div>
            <p className="text-muted-foreground text-sm">
              Fired when an intent is successfully executed
            </p>
          </div>
        </div>
        <div className="bg-card border border-border p-6 font-mono text-sm">
          <div className="text-primary mb-2">// Subscribe to events</div>
          <div className="text-foreground">
            client.on(<span className="text-neon-green">'bridge.completed'</span>, (event) ={'>'} {'{'}
          </div>
          <div className="text-foreground ml-4">
            console.log(<span className="text-neon-green">'Bridge completed:'</span>, event);
          </div>
          <div className="text-foreground">{"}"});</div>
        </div>
      </>
    ),
  },
};

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentDoc = docContent[activeSection];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40 relative">
        <div className="px-8 py-6 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-foreground">
            Axiom Zero
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:sticky top-[73px] h-[calc(100vh-73px)] w-64 border-r border-border bg-background transition-transform duration-200 z-30 overflow-y-auto`}
        >
          <nav className="p-6 space-y-8">
            {docSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-mono text-primary tracking-wider mb-4">
                  / {section.title.toUpperCase()}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveSection(item.id);
                          setSidebarOpen(false);
                        }}
                        className={`text-sm w-full text-left px-3 py-2 rounded transition-colors ${
                          activeSection === item.id
                            ? "bg-secondary text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-12 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {currentDoc.title}
            </h1>
            {currentDoc.content}
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Button variant="outline" className="border-border hover:bg-secondary">
              Previous
            </Button>
            <Button variant="outline" className="border-border hover:bg-secondary">
              Next
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
