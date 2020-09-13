import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function BottleDetail(props){
  const { bottle, onClickingDelete, onClickingSell } = props;

  return (
    <React.Fragment>
      <h1>Bottle Detail</h1>
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.price}</p>
      <p>{props.origin}</p>
      <p>{props.tastingNotes}</p>
      <p>{props.count}</p>
      <Button tyle={{margin: 10}} variant="danger" onClick={() => onClickingSell() }>Sell Shot</Button>
      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Update Bottle</Button>
      <Button tyle={{margin: 10}} variant="danger" onClick={() => onClickingDelete(bottle.id) }>Remove Bottle</Button>
      <hr/>
    </React.Fragment>
  );
}

BottleDetail.propTypes = {
  bottle: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BottleDetail;