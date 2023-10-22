import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";
import styles from "./VerticalTab.module.css"

function VerticalTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
    <div className={styles.verticalBox}>
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
          </div>
        </Col>
        <Col sm="9" style={{position:'relative'}}>
          <img className="cardbkg" src="./card.png" alt=""/>
          <img className="cardhouse" src="./Frame.png" alt=""/>
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
