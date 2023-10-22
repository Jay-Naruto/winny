import React from "react";


function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }}>
      <button
        className="section__Jobs-buttonCompany"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#64ffda" }
            : { color: "#8892b0" }
        }
      >
        <div>{props.data.expData.company}</div>
      </button>
    </li>
  );
}

export default VTlist;
