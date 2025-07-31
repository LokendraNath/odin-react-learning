import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HumanEvilustion from "./HumanEvilution";
import userEvent from "@testing-library/user-event";

describe("Human Revilution", () => {
  it("Should render Human", () => {
    const { container } = render(<HumanEvilustion />);
    expect(container).toMatchSnapshot();
  });

  it("should render human after button click", async () => {
    const user = userEvent.setup();

    render(<HumanEvilustion />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/human/i);
  });
});
