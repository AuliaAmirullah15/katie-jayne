import Checkbox from "@/app/components/buttons/checkbox";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("Checkbox Component", () => {
  test("renders the checkbox container", () => {
    render(<Checkbox isChecked={false} />);
    const checkboxContainer = screen.getByTestId("checkbox-label");
    expect(checkboxContainer).toBeInTheDocument();
  });

  test("applies correct class when checked", () => {
    render(<Checkbox isChecked={true} />);
    const checkboxLabel = screen.getByTestId("checkbox-label");
    expect(checkboxLabel).toHaveClass("bg-black");
  });

  test("applies correct class when unchecked", () => {
    render(<Checkbox isChecked={false} />);
    const checkboxLabel = screen.getByTestId("checkbox-label");
    expect(checkboxLabel).toHaveClass("bg-white");
  });

  test("renders the checkmark when checked", () => {
    render(<Checkbox isChecked={true} />);
    const checkmark = screen.getByTestId("checkmark");
    expect(checkmark).toBeInTheDocument();
  });

  test("does not render the checkmark when unchecked", () => {
    render(<Checkbox isChecked={false} />);
    const checkmark = screen.queryByTestId("checkmark");
    expect(checkmark).not.toBeInTheDocument();
  });

  test("sets aria-checked to true when checked", () => {
    render(<Checkbox isChecked={true} />);
    const checkboxInput = screen.getByRole("checkbox");
    expect(checkboxInput).toHaveAttribute("aria-checked", "true");
  });

  test("sets aria-checked to false when unchecked", () => {
    render(<Checkbox isChecked={false} />);
    const checkboxInput = screen.getByRole("checkbox");
    expect(checkboxInput).toHaveAttribute("aria-checked", "false");
  });
});
