interface DocSection {
  title: string;
  items: { id: string; label: string }[];
}

interface DocSidebarProps {
  sections: DocSection[];
  activeSection: string;
  onSectionChange: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const DocSidebar = ({
  sections,
  activeSection,
  onSectionChange,
  isOpen,
  onClose,
}: DocSidebarProps) => {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed md:sticky top-[73px] h-[calc(100vh-73px)] w-64 border-r border-border bg-background transition-transform duration-200 z-30 overflow-y-auto`}
    >
      <nav className="p-6 space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-mono text-primary tracking-wider mb-4">
              / {section.title.toUpperCase()}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSectionChange(item.id);
                      onClose();
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
  );
};
