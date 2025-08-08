import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export default function MyApp6() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext value={theme}>
        <Form />
      </ThemeContext>
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </Button>
    </>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const bgColor = theme === "light" ? "white" : "black";
  const textColor = theme === "light" ? "white" : "black";

  return (
    <section style={{ backgroundColor: { bgColor }, color: { textColor } }}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
