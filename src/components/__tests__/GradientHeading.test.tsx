import GradientHeading from "components/GradientHeading";
import { render, screen } from "utils/testUtils";

describe("GradientHeading", () => {
  it("should display child text as heading", () => {
    const headingText = "Heading";
    render(<GradientHeading>{headingText}</GradientHeading>);
    expect(screen.getByRole("heading", { name: headingText })).toBeVisible();
  });
});
