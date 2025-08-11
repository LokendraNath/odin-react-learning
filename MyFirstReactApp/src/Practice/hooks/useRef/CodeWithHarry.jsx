import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const a = useRef(0);
  const button10Ref = useRef();

  useEffect(() => {
    a.current = a.current + 1;
    console.log(console.log(`Rerendering a is ${a.current}...`));
  });

  useEffect(() => {
    button10Ref.current.style.backgroundColor = "pink";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Simple Counter</h2>

        <div className="flex items-center justify-center space-x-6 mb-6">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100"
            aria-label="decrement"
          >
            -
          </button>

          <div className="text-4xl font-bold">{count}</div>

          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            aria-label="increment"
          >
            +
          </button>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Reset
          </button>

          <button
            ref={button10Ref}
            onClick={() => setCount((c) => c + 10)}
            className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            +10
          </button>
          <button
            onClick={() => {
              button10Ref.current.style.display = "none";
            }}
          >
            Hide 10+
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
