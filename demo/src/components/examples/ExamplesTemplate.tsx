import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tabs } from "../Tab";

interface ExamplesTemplateProps {
  id: string;
  title: string;
  description: string;
  templateContent: React.ReactNode;
  codeContent: string;
}

const ExamplesTemplate: React.FC<ExamplesTemplateProps> = ({
  id,
  title,
  description,
  templateContent,
  codeContent,
}) => {
  const customSyntaxHighlighterStyle = {
    backgroundColor: "var(--accentCodeBox)",
    color: "var(--accentCode)",
    padding: "0 20px 30px 20px",
    borderRadius: "10px",
  };

  const [showCheck, setShowCheck] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeContent);
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 2000);
  };

  return (
    <section id={id} className="w-full pt-20">
      <h1 className="text-[28px] font-bold lato text-accent-3">{title}</h1>
      <div className="pt-4 mb-6">{description}</div>
      <>
        <Tabs
          tabs={[
            {
              label: "Preview",
              content: (
                <div className="h-[600px] w-full bg-red-500 flex items-center justify-center">
                  {templateContent}
                </div>
              ),
            },
            {
              label: "Code",
              content: (
                <div className="border border-baseTwo rounded-[10px] relative">
                  <SyntaxHighlighter
                    language="jsx"
                    customStyle={customSyntaxHighlighterStyle}
                    style={tomorrowNight}
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                  <button
                    title={!showCheck ? "Copy" : "Copied"}
                    className="absolute top-5 right-10 copy-svg"
                    onClick={handleCopyClick}
                  >
                    {!showCheck && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path>
                      </svg>
                    )}
                  </button>
                  {showCheck && (
                    <svg
                      className="absolute top-5 right-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#089904"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  )}
                </div>
              ),
            },
          ]}
        />
      </>
    </section>
  );
};

export default ExamplesTemplate;
