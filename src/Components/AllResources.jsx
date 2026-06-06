import React from "react";
import { useState } from "react";
import { Download, Star, ExternalLink } from "lucide-react";

export default function AllResources({ resourcesData }) {
  const tabs = [
    "All Resources",
    "Online Courses",
    "Writing Tools",
    "Productivity Tools",
  ];
  
  const [activeTab, setActiveTab] = useState("All Resources");

  const filteredResources = activeTab === "All Resources"
    ? resourcesData
    : resourcesData.filter(item => item.category1 === activeTab);

  return (
    <>
      <div className="tabs-wrapper">
        <h1 className="tabs-title">All Resources</h1>

        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <hr className="tabs-divider" />
      </div>

      <div className="resources-grid">
        {filteredResources.map((item) => (
          <div key={item.id} className="compact-card">
            <div className="compact-header">
              <div className="compact-left-badges">
                <span className="icon">{item.imogi}</span>
                <span className="compact-badge compact-badge-green">
                  {item.category1}
                </span>
              </div>
              <span className="compact-badge compact-badge-purple">
                {item.category2}
              </span>
            </div>

            <h3 className="compact-title">{item.title}</h3>
            <p className="compact-desc">{item.description}</p>

            <div className="compact-meta">
              <div className="compact-users">
                <Download size={15} />
                <span>{item.usersCount}</span>
              </div>
              <div className="compact-stars">
                <Star size={15} fill="#a15c25" stroke="none" />
                <Star size={15} fill="#a15c25" stroke="none" />
                <Star size={15} fill="#a15c25" stroke="none" />
                <Star size={15} fill="#a15c25" stroke="none" />
                <Star size={15} fill="none" stroke="#ccc" />
              </div>
            </div>

            <button className="compact-btn">
              <ExternalLink size={16} />
              Visit Resource
            </button>
          </div>
        ))}
      </div>
    </>
  );
}