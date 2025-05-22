import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders with default primary variant", () => {
    render(<Button>לחץ כאן</Button>);

    const button = screen.getByRole("button", { name: "לחץ כאן" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-white bg-amber-500");
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">לחץ כאן</Button>);

    const button = screen.getByRole("button", { name: "לחץ כאן" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-black bg-white");
  });

  it("renders with outline variant", () => {
    render(<Button variant="outline">לחץ כאן</Button>);

    const button = screen.getByRole("button", { name: "לחץ כאן" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "text-white bg-amber-600 border-4 border-amber-100",
    );
  });

  it("applies additional className when provided", () => {
    render(<Button className="mt-8">לחץ כאן</Button>);

    const button = screen.getByRole("button", { name: "לחץ כאן" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("mt-8");
  });
});
