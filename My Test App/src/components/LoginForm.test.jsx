import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import LoginForm from "./LoginForm";

test("form fields render करते हैं", () => {
  render(<LoginForm onSubmit={() => {}} />);

  expect(screen.getByLabelText("Email:")).toBeInTheDocument();
  expect(screen.getByLabelText("Password:")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
});

test("valid data के साथ form submit करता है", async () => {
  const user = userEvent.setup();
  const mockSubmit = vi.fn();

  render(<LoginForm onSubmit={mockSubmit} />);

  // Form fill करें
  await user.type(screen.getByLabelText("Email:"), "test@example.com");
  await user.type(screen.getByLabelText("Password:"), "password123");

  // Submit करें
  await user.click(screen.getByRole("button", { name: "Login" }));

  // Check करें कि onSubmit call हुआ
  expect(mockSubmit).toHaveBeenCalledWith({
    email: "test@example.com",
    password: "password123",
  });
});

test("empty fields पर error messages show करता है", async () => {
  const user = userEvent.setup();
  const mockSubmit = vi.fn();

  render(<LoginForm onSubmit={mockSubmit} />);

  // Empty form submit करें
  await user.click(screen.getByRole("button", { name: "Login" }));

  // Error messages check करें
  expect(screen.getByTestId("email-error")).toHaveTextContent("Email required");
  expect(screen.getByTestId("password-error")).toHaveTextContent(
    "Password required"
  );

  // onSubmit call नहीं होना चाहिए
  expect(mockSubmit).not.toHaveBeenCalled();
});
