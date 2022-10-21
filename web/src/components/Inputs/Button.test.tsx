import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Button from "./Button";

describe("Button", () => {
  it("should render", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText(/hello/i)).toBeTruthy();
  });

  it("should not call onClick when disabled", () => {
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByText(/disabled/i));

    expect(handleClick).not.toBeCalled();
  });

  it("should not call onClick when loading", () => {
    const handleClick = vi.fn();

    render(
      <Button loading onClick={handleClick}>
        Loading
      </Button>
    );
    fireEvent.click(screen.getByText(/loading/i));

    expect(handleClick).not.toBeCalled();
  });
});
