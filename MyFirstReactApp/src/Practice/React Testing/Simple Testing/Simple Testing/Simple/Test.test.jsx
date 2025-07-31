import { describe, expect, it } from "vitest";
import Test from "./Test";
import { render, screen } from "@testing-library/react";

describe("Test Component", () => {
  it("should render currect heading", () => {
    render(<Test />);
    expect(screen.getByRole("heading").textContent).toMatch(/my first test/i);
  });
});
