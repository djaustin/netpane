import SearchInput from "components/SearchInput";
import user from "@testing-library/user-event";
import * as router from "next/router";
import { render, screen } from "utils/testUtils";

describe("SearchInput", () => {
  let mockPush = jest.fn();
  let queryText = "test";

  beforeEach(() =>
    jest.spyOn(router, "useRouter").mockReturnValue({ push: mockPush } as any)
  );
  afterEach(() => jest.resetAllMocks());
  it("should display a text input", () => {
    render(<SearchInput />);
    expect(screen.getByRole("textbox")).toBeVisible();
  });
  it("should not display a button by default", () => {
    render(<SearchInput />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("should display a button when specified", () => {
    render(<SearchInput hasButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should redirect to the search page when a query is entered and the button is clicked", () => {
    render(<SearchInput hasButton />);
    user.type(screen.getByRole("textbox"), queryText);
    user.click(screen.getByRole("button"));

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith(
      `/search?query=${queryText}&scope=ip-address,site,vlan`
    );
  });
  it("should not redirect to the search page when the textbox is empty and the button is clicked", () => {
    render(<SearchInput hasButton />);
    user.click(screen.getByRole("button"));

    expect(mockPush).toHaveBeenCalledTimes(0);
  });
  it("should redirect to the search page when a query is entered the user presses 'Enter' in the search box", () => {
    render(<SearchInput hasButton />);
    user.type(screen.getByRole("textbox"), queryText + "{enter}");

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith(
      `/search?query=${queryText}&scope=ip-address,site,vlan`
    );
  });
  it("should not redirect to the search page when the textbox is empty and the button is clicked", () => {
    render(<SearchInput hasButton />);
    user.type(screen.getByRole("textbox"), "{enter}");

    expect(mockPush).toHaveBeenCalledTimes(0);
  });
});
