// import { useState } from "react";

//? Challenge 1 of 4: Gallery कम्पलीट करें (after crash length <)
/*
import { sculptureList } from "./data.js";
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      alert("You have no page left");
    }
  }
  function handlePrevius() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  function handleShowMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  console.log(sculpture);
  return (
    <>
      <button onClick={handlePrevius} disabled={index === 0}>Previus</button>

      <button onClick={handleClick} disabled={index === sculptureList.length -1 }>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowMore} >
        {showMore ? "Hide" : "Show"} Show
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
*/

//? Challenge 2 of 4: अटके हुए फॉर्म इनपुट को ठीक करें //
/*
export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
*/

//? Challenge 3 of 4: क्रैश ठीक करें
/*
export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
*/

//? Challenge 4 of 4: अनावश्यक State हटाएं 
/*
export default function FeedbackForm() {

  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
*/