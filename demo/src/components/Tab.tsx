import React, { useState } from "react";

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ content }) => {
  return <div className="hidden">{content}</div>;
};

interface TabsProps {
  initialTab?: number;
  tabs: TabProps[];
}

const Tabs: React.FC<TabsProps> = ({ initialTab = 0, tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab);

  return (
    <div className="w-full">
      <div className="flex mb-4 border-b-2 border-accent-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "font-normal bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text border-b-2 -mb-[2px]"
                : "text-gray-400"
            } px-4 py-2 mr-2 rounded-t-lg`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div key={index} className={activeTab === index ? "" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Tab, Tabs };
