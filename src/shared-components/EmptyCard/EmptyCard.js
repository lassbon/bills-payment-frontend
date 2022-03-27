import React from "react";
import { emptyIcon } from "../../assets/exports";
import '../../assets/styles/custom.css'

const EmptyCard = (props) => {
  return (
    <div classNameName="empty-card--items">
      <div
        classNameName="empty-illustration"
        dangerouslySetInnerHTML={{ __html: emptyIcon }}
      />
      <div classNameName="empty-text">
        <h1>{props.title || "Welcome"}</h1>
        <p>{props.message || "Nothing to see"}</p>
      </div>
    </div>
  );
};

export default EmptyCard;
