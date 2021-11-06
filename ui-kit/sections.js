import React from "react";

export const Sections = ({ sectionItems }) => {
    console.log(sectionItems);
  return (
    <div>
      {sectionItems.length > 0 &&
        sectionItems.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.name}</h3>
            </div>
          );
        })}
    </div>
  );
};
