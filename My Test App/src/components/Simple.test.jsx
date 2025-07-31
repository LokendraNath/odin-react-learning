import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/user-event";
// import userEvent from "@testing-library/user-event";
// import CostomButton from "./CostomButton";
import Simple from "./Simple";
import { act } from "react";

describe("nomber", () => {
  it("should render 1", () => {
    const el = document.createElement("div");
    act(() => {
      ReactDOM.render(<Simple />, el);
    });
    expect(el.innerHTML).toBe("1"); //this fails!
  });
});
