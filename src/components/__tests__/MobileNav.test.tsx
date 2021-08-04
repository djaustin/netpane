import userEvent from "@testing-library/user-event"
import MobileNav, { MobileNavProps } from "components/MobileNav"
import { render, screen } from "utils/testUtils"

describe('MobileNav', () => {
    const navProps: MobileNavProps = {
        onMenuClick: jest.fn()
    }
    it('should display a button to open the menu', () => {
        render(<MobileNav {...navProps} />)
        expect(screen.getByRole('button', {name: /open menu/i})).toBeVisible()
    })
    it('should display an app name title', () => {
        render(<MobileNav {...navProps} />)
        expect(screen.getByText(/netpane/i)).toBeVisible()
    })
    it('should display a dark mode toggle', () => {
        render(<MobileNav {...navProps} />)
        expect(screen.getByRole('button', {name: /dark mode/i})).toBeVisible()
    })
    it('should trigger the onOpen function when the menu button is clicked', () => {
        render(<MobileNav {...navProps} />)
        const menuButton = screen.getByRole('button', {name: /open menu/i})
        userEvent.click(menuButton)
        expect(navProps.onMenuClick).toHaveBeenCalledTimes(1)
    })
})
