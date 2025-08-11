import { useEffect, useRef } from "react";

export const Simple = () => {
  const buttonRef = useRef(null);

  function buttonClick() {
    buttonRef.current?.focus();
  }

  useEffect(() => {
    buttonRef.current.focus();
    buttonRef.current.textContent = "Hey, I'm different!";
    let timeout = setTimeout(() => {
      buttonRef.current.textContent = "Click Me!";
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <button
      onClick={buttonClick}
      ref={buttonRef}
      className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Click Me!
    </button>
  );
};
