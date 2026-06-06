import React from "react";
import {
  GraduationCap,
  Download,
  Star,
  ExternalLink,
  Bookmark,
} from "lucide-react";

export default function FeaturedReasource({resources}) {
  return (
    <>
      <div className="resource-continer">
        <h2 className="Title-Guud"> Featured Resources</h2>
        <div className="Resource-Cards">
            {resources.map((resource) =>(
          <div key={resource.id} className="Resource-Card">
            <div className="Resource-continer">
              <div className="Card-header">
                <div className="header">
                  <span className="icon">{resource.imogi}</span> <span className="CourseName">{resource.CourseName} </span>
                </div>
                <div className="video">{resource.video}</div>
              </div>
              <h3 className="Title">{resource.title}</h3>
              <p className="desc">{resource.description} </p>
              <div className="Status">
                <span className="Download"> <Download size={16}/>{resource.usersCount}</span>
                <span className="rating">
                  <div className="stars">
                    <Star size={16} fill="#b36a33" stroke="none" />
                  <Star size={16} fill="#b36a33" stroke="none" />
                  <Star size={16} fill="#b36a33" stroke="none" />
                  <Star size={16} fill="#b36a33" stroke="none" />
                  <Star size={16} fill="none" stroke="#ccc" />
                  </div>
                  <span className="rateNum">{resource.rating}</span>
                </span>
              </div>
              <div className="Butns">
                <button className="Visit-btn">
                  <ExternalLink size={18} /> Visit Resource
                </button>
                <button className="seved-btn"><Bookmark size={18} /></button>
              </div>
            </div>
          </div>
          ))}
        </div>
        
      </div>
      <div className="line">
            <hr />
        </div>
    </>
  );
}
