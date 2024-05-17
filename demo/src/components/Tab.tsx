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
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
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
