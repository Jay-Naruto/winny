import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";
import styles from "./VerticalTab.module.css"


function VerticalTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
    // alert(id)
  }
  const VALUES = ["2023-01-1","2023-01-2","2023-01-3","2023-01-4","2023-01-5","2023-01-6","2023-01-7","2023-01-8"];

  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  const handleIndexClick = (index) => {
    setValue(index);
    setPrevious(value);
  };
  return (
    <div id="services" className={styles.verticalBox}>
          <img className="looper" src="./Looper-4.png" alt=""/>

      <div className={styles.verticalInnerBox}>
          <div>
          Our Core Services
          </div>
          <p>
          Where service is paramount, your satisfaction is our top priority. From start to finish, our commitment to service never wavers.
          </p>
      </div>



    <Container className="section__Jobs-container">
      <Row  className="section__Jobs-container2">
        <Col sm="3">
          <div className="section__Jobs-styledTab">
            <ul className="section__Jobs-styledTabList">
              {props.data.map((job, index) => (
                <VTlist
                  key={index}
                  onClick={btnClick}
                  data={job}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
            <span className="timeline-divider"></span>
          </div>
        </Col>
        <Col sm="9" style={{position:'relative'}}>
          <img className="cardbkg" src="./card.png" alt=""/>
          <img className="cardhouse" src=
          {
            activeTabId === 0 ?"./Frame.png" :activeTabId === 1 ? "./sv1.png" : activeTabId === 2 ? "./sv2.png": activeTabId === 3 ? "./sv3.png" : activeTabId === 4  ? "./sv4.png": activeTabId === 5 ? "./sv5.png" :null
          }
          
          
          alt=""/>
          <img className="cardellipse" src="./ellipse1.png" alt=""/>



          <div className="cardcontent" >
          {props.data.map((job, index) => (
            <VTcontent
              data={job}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
          </div>

        </Col>
      </Row>
      <span
        className={
          activeTabId === 0
            ? "index1-chosen"
            : activeTabId === 1
            ? "index2-chosen"
            : "index3-chosen"
        }
      >
        &nbsp;
      </span>
    </Container>
    </div>

  );
}

export default VerticalTab;
