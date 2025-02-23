import Checkbox from "@/app/components/buttons/checkbox";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("Checkbox Component should", () => {
  test("render the checkbox container", () => {
    render(<Checkbox isChecked={false} />);
    const checkboxContainer = screen.getByTestId("checkbox-label");
    expect(checkboxContainer).toBeInTheDocument();
  });

  test("apply correct class when checked", () => {
    render(<Checkbox isChecked={true} />);
    const checkboxLabel = screen.getByTestId("checkbox-label");
    expect(checkboxLabel).toHaveClass("bg-black");
  });

  test("apply correct class when unchecked", () => {
    render(<Checkbox isChecked={false} />);
    const checkboxLabel = screen.getByTestId("checkbox-label");
    expect(checkboxLabel).toHaveClass("bg-white");
  });

  test("render the checkmark when checked", () => {
    render(<Checkbox isChecked={true} />);
    const checkmark = screen.getByTestId("checkmark");
    expect(checkmark).toBeInTheDocument();
  });

  test("not render the checkmark when unchecked", () => {
    render(<Checkbox isChecked={false} />);
    const checkmark = screen.queryByTestId("checkmark");
    expect(checkmark).not.toBeInTheDocument();
  });

  test("set aria-checked to true when checked", () => {
    render(<Checkbox isChecked={true} />);
    const checkboxInput = screen.getByRole("checkbox");
    expect(checkboxInput).toHaveAttribute("aria-checked", "true");
  });

  test("set aria-checked to false when unchecked", () => {
    render(<Checkbox isChecked={false} />);
    const checkboxInput = screen.getByRole("checkbox");
    expect(checkboxInput).toHaveAttribute("aria-checked", "false");
  });
});
