import React from "react";
import { emptyIcon } from "../../assets/exports";
import '../../assets/styles/custom.css'

const EmptyCard = (props) => {
  return (
    <div className="empty-card--items">
      <div
        className="empty-illustration"
        dangerouslySetInnerHTML={{ __html: emptyIcon }}
      />
      <div className="empty-text">
        <h1>{props.title || "Welcome"}</h1>
        <p>{props.message || "Nothing to see"}</p>
      </div>
    </div>
  );
};

export default EmptyCard;
