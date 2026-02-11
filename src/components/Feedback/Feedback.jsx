import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {

const [count1, setFeedbackLikes] = useState(0);
const [count2, setFeedbackDisikes] = useState(0);

// console.log("Count in Component:", count1);
// console.log("Count in Component:", count2);

  const Likes = () => {
    setFeedbackLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  const Dislikes = () => {
   setFeedbackDisikes((prevValue) => {
      return prevValue + 1;
    });
  };
 const Reset = () => {
    setFeedbackLikes("0");
    setFeedbackDisikes("0");
  };
return (
    <div className="feedback_wrapper">
      <div className="button_control">
        <Button name="Like" onClick={Likes} />
        <p className="count">{count1}</p>
      </div>
      
      <div className="button_control">
        <Button name="Dislike" onClick={Dislikes} />
        <p className="count">{count2}</p>
      </div>
      <div className="button_control">
        <Button name="Reset" onClick={Reset} />
      </div>
    </div>
  );
}

export default Feedback;