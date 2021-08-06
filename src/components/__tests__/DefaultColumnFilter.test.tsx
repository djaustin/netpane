import DefaultColumnFilter from "components/DefaultColumnFilter";
import user from "@testing-library/user-event";
import { render, screen } from "utils/testUtils";

describe("DefaultColumnFilter", () => {
  const filterProps = {
    column: {
      filterValue: undefined,
      preFilteredRows: [],
      setFilter: jest.fn(),
    },
  };
  afterEach(() => jest.resetAllMocks());
  it("should display a text input", () => {
    render(<DefaultColumnFilter {...filterProps} />);
    expect(screen.getByRole("textbox")).toBeVisible();
  });
  it("should update the filter when text is entered", () => {
    render(<DefaultColumnFilter {...filterProps} />);
    const textBox = screen.getByRole("textbox");
    user.type(textBox, "database");
    expect(filterProps.column.setFilter).toHaveBeenCalled();
  });
});
