import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import FinalMenu from "./components/finalMenu";
import List from "./components/list";

test("renders select filter in the component", () => {
  render(<FinalMenu />);
  const buttonText = screen.getByRole("button", {
    name: /select filter/i,
  });
  expect(buttonText).toBeInTheDocument();
});

test("clicking on the filter dropdown", () => {
  render(<FinalMenu />);
  const dropDownButton = screen.getByRole("button", {
    name: /select filter/i,
  });
  fireEvent.click(dropDownButton);
  expect(screen.getByText(/date/i)).toBeInTheDocument();
});

test("selecting a filter from the dropdown should add a new filter to the list", () => {
  render(<FinalMenu />);
  const dropDownButton = screen.getByRole("button", {
    name: /select filter/i,
  });
  fireEvent.click(dropDownButton);
  const dateOption = screen.getByText(/date/i);
  fireEvent.click(dateOption);
  const addButton = screen.getByTestId("add-icon");
  fireEvent.click(addButton);
  const dateFilter = screen.getByText("Date");
  fireEvent.click(dateFilter);
  expect(screen.queryByText("Date")).toBeInTheDocument();
});

test("clicking on the subtract icon should remove the last filter from the list", () => {
  render(<FinalMenu />);
  const dropDownButton = screen.getByRole("button", {
    name: /select filter/i,
  });
  fireEvent.click(dropDownButton);
  const dateOption = screen.getByText(/date/i);
  fireEvent.click(dateOption);
  const addButton = screen.getByTestId("add-icon");
  fireEvent.click(addButton);
  const dateFilter = screen.getByText("Date");
  fireEvent.click(dateFilter);
  expect(screen.queryByText("Date")).toBeInTheDocument();
  const deleteButton = screen.getByTestId("delete-icon");
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Date")).not.toBeInTheDocument();
});

describe("List component", () => {
  it("renders all filter options", () => {
    const selected = {
      type: true,
      Status: true,
      Amount: true,
      Date: true,
    };
    render(<List selected={selected} />);
    const typeDropdown = screen.getByText("Type");
    const statusDropdown = screen.getByText("Status");
    const amountDropdown = screen.getByText("Amount");
    const dateDropdown = screen.getByText("Date");
    expect(typeDropdown).toBeInTheDocument();
    expect(statusDropdown).toBeInTheDocument();
    expect(amountDropdown).toBeInTheDocument();
    expect(dateDropdown).toBeInTheDocument();
  });

  it("displays selected options", () => {
    const selected = {
      type: true,
      Status: true,
      Amount: true,
      Date: true,
    };
    render(<List selected={selected} />);
    const typeSelected = screen.getByText("Type");
    const statusSelected = screen.getByText("Status");
    const amountSelected = screen.getByText("Amount");
    const dateSelected = screen.getByText("Date");
    expect(typeSelected).toBeInTheDocument();
    expect(statusSelected).toBeInTheDocument();
    expect(amountSelected).toBeInTheDocument();
    expect(dateSelected).toBeInTheDocument();
  });
});