import AddressActionsCell from "../AddressActionsCell";
import { render, screen } from "utils/testUtils";
import { Cell } from "react-table";

describe("AddressActionsCell", () => {
  it("should display edit and view actions", () => {
    render(
      <AddressActionsCell cell={{ value: "http://example.com/" } as Cell} />
    );
    expect(screen.getByRole("button", { name: /edit/i })).toBeVisible();
    expect(screen.getByRole("button", { name: /view/i })).toBeVisible();
  });
});
