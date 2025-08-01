import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, content, isActive }) => {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "1rem",
        backgroundColor: isActive ? "#e0ffe0" : "#ffe0e0",
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// 🛡️ Default props
Card.defaultProps = {
  title: "Default Title",
  content: "Default content goes here.",
  isActive: false,
};

// 🧩 Prop types check
Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Card;
