import React from "react";

function VTcontent(props) {
  let data = props.data.expData;

  return (
    <div
      key={props.index}
      className="section__Jobs-styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4>{data.position}</h4>
      {data.details.map(detail => (
        <div className="section__Jobs-detail">{detail}</div>
      ))}
    </div>
  );
}

export default VTcontent;
