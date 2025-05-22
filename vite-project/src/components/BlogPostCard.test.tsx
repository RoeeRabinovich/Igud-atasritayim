import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogPostCard } from "./BlogPostCard";

describe("BlogPostCard component", () => {
  it("renders with multiple categories", () => {
    render(
      <BlogPostCard
        categories={["מה חדש", "קולות קוראים"]}
        title="כותרת לדוגמה"
        date="01.01.24"
        author="מאת ישראל ישראלי"
      />,
    );

    expect(screen.getByText("מה חדש")).toBeInTheDocument();
    expect(screen.getByText("קולות קוראים")).toBeInTheDocument();
    expect(screen.getByText("כותרת לדוגמה")).toBeInTheDocument();
    expect(screen.getByText("01.01.24")).toBeInTheDocument();
    expect(screen.getByText("מאת ישראל ישראלי")).toBeInTheDocument();
  });

  it("renders with single category", () => {
    render(
      <BlogPostCard
        singleCategory="לגזור ולשמור"
        title="כותרת לדוגמה"
        date="01.01.24"
        author="מאת ישראל ישראלי"
      />,
    );

    expect(screen.getByText("לגזור ולשמור")).toBeInTheDocument();
    expect(screen.getByText("כותרת לדוגמה")).toBeInTheDocument();
    expect(screen.getByText("01.01.24")).toBeInTheDocument();
    expect(screen.getByText("מאת ישראל ישראלי")).toBeInTheDocument();
  });

  it("renders with image when provided", () => {
    render(
      <BlogPostCard
        imageUrl="test-image.jpg"
        title="כותרת לדוגמה"
        date="01.01.24"
        author="מאת ישראל ישראלי"
      />,
    );

    const image = screen.getByAltText("כותרת לדוגמה");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });
});
