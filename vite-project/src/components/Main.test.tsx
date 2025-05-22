import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("Main component", () => {
  it("renders without crashing", () => {
    render(<Main />);
    expect(document.querySelector(".relative")).toBeInTheDocument();
  });

  it("contains all required sections", () => {
    render(<Main />);

    // Check for hero section
    expect(screen.getByText("צרו קשר")).toBeInTheDocument();
    expect(screen.getByText("שאלות נפוצות")).toBeInTheDocument();
    expect(screen.getByText("שמירת יצירה")).toBeInTheDocument();
    expect(screen.getByText("מידע מקצועי")).toBeInTheDocument();

    // Check for calls section
    expect(screen.getByText("קולות קוראים")).toBeInTheDocument();
    expect(screen.getByText("לגזור ולשמור ♥︎")).toBeInTheDocument();

    // Check for info section
    expect(screen.getByText("אירועים וסדנאות")).toBeInTheDocument();
    expect(screen.getByText("כלים שימושיים")).toBeInTheDocument();
    expect(screen.getByText("מה חדש")).toBeInTheDocument();

    // Check for other sections
    expect(screen.getByText("הישארו מעודכנים")).toBeInTheDocument();
    expect(screen.getByText("הירשמו לניוזלטר")).toBeInTheDocument();
    expect(screen.getByText("בשותפות ובחסות")).toBeInTheDocument();
  });
});
