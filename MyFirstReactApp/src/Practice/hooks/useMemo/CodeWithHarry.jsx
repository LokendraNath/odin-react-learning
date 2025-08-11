import React, { useMemo, useState } from "react";

const ExpensiveCalculationComponent = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // ❌ बिना useMemo के: हर री-रेंडर पर calculate करेगा (भले ही 'number' न बदला हो)
  // const squaredNumber = calculateSquare(number);

  // ✅ useMemo के साथ: 'number' बदले तभी calculate करेगा
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return calculateSquare(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>
        Square of {number} is: {squaredNumber}
      </p>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
    </div>
  );
};

// Heavy Function (जिसे memoize करना है)
function calculateSquare(num) {
  console.log("Heavy Calculation...");
  return num * num;
}

export default ExpensiveCalculationComponent;
