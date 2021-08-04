import NavItem from "components/NavItem"
import { useRouter } from "next/router"
import { render, screen } from "utils/testUtils"

jest.mock('next/router')

describe('NavItem', () => {
    it('should display child text', () => {
        (useRouter as jest.Mock).mockReturnValue({asPath: ''})
        render(<NavItem link=''>test</NavItem>)
        expect(screen.getByText(/test/i)).toBeVisible()
    })
})
