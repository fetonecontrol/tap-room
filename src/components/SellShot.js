import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function Subtract(props){
  const {bottle} = props;
  const subtractCount = bottle.count -1;
  function handleSubtractFormSubmission(event){
    event.preventDefault();
    props.onSellShot({
      count: subtractCount,
      id: bottle.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleSubtractFormSubmission}
        buttonText="Sell Shot" />
    </React.Fragment>
  );
}
Subtract.propTypes = {
  onSellShot: PropTypes.func
};

export default Subtract;
