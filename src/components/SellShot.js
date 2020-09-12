// import React from "react";
// import PropTypes from "prop-types";
// import ReusableButton from "./JustAbutton";

// function SellShot(props){
//   const {bottle} = props;
//   const subtractCount = bottle.count -1;
//   function handleSubtractFormSubmission(event){
//     event.preventDefault();
//     props.onEditBottle({
//       count: subtractCount,
//       id: bottle.id});
//   }

//   return (
//     <React.Fragment>
//       <ReusableButton
//         formSubmissionHandler={handleSubtractFormSubmission}
//         buttonText="Sell Shot" />
//     </React.Fragment>
//   );
// }
// SellShot.propTypes = {
//   onSellShot: PropTypes.func
// };

// export default SellShot;
