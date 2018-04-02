import React from "react";
import { Col } from 'react-bootstrap';
import PackingListItem from "./PackingListItem";


const PackingDisplay = props => {
  return (
    <Col x={12} className="packing-display">
      <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
        {props.results.length !== 0 ?
          props.results.map(pack =>
            <PackingListItem
              editing={props.editing}
              editId={props.editId}
              getPacking={props.getPacking}
              id={pack.id}
              key={pack.id}
              result={pack}
              toggleEdit={props.toggleEdit}
            />) :
          <p className="second-text">Get packing!</p>}
      </ul>
    </Col>
  );
};

export default PackingDisplay;