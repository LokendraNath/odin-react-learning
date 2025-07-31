import { beforeEach, describe, expect, it } from "vitest";
import TodoList from "./ToDoList";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("To Do List", () => {
  it("Should have Heading In the document", () => {
    render(<TodoList />);
    // const heading = screen.getByText("Todo List");
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  it("should add the item", async () => {
    render(<TodoList />);
    const inputFeild = screen.getByTestId("todo-input"); // Add To veriable
    // fireEvent.change(inputFeild, { target: { value: "Coding Practice" } }); //Change karne par
    await userEvent.type(inputFeild, "Coding Practice");
    const addButton = screen.getByTestId("add-btn");
    fireEvent.click(addButton);
    expect(screen.getByText("Coding Practice")).toBeInTheDocument();
  });

  it("should Delete the item", async () => {
    render(<TodoList />);
    const inputFeild = screen.getByTestId("todo-input");
    await userEvent.type(inputFeild, "Coding Practice");
    const addButton = screen.getByTestId("add-btn");
    fireEvent.click(addButton);
    const deleteBtn = screen.getByTestId("deleteBtn");
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Coding Practice")).not.toBeInTheDocument();
  });
});
