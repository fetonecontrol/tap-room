import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function EditBottleForm(props){
  const {bottle} = props;
  // const counter = bottle.count;
  const onClickingSell = props.onClickingSell;
  function handleEditBottleFormSubmission(event){
    event.preventDefault();
    props.onEditBottle({
      name: event.target.name.value,
      type: event.target.type.value,
      price: event.target.price.value,
      origin: event.target.origin.value,
      tastingNotes: event.target.tastingNotes.value,
      // count : counter,
      id: bottle.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditBottleFormSubmission}
        buttonText="Update Bottle" />
      <Button tyle={{margin: 10}} variant="danger" onClick={() => onClickingSell(bottle) }>Sell Shot</Button>
    </React.Fragment>
  );
}

EditBottleForm.propTypes = {
  onEditBottle: PropTypes.func
};

export default EditBottleForm;
