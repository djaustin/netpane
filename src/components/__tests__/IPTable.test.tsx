import IPTable, { IPTableProps } from "components/IPTable"
import { render, screen } from "utils/testUtils"

describe('IPTable', () => {
    const ipTableProps: IPTableProps = {
        addresses: []
    }
    it('should render a table', () => {
        render(<IPTable {...ipTableProps} />)
        expect(screen.getByRole('table')).toBeVisible()
    })
    it('should render correct headings', () => {
        render(<IPTable {...ipTableProps} />)
        expect(screen.getByText(/vlan/i)).toBeVisible()
        expect(screen.getByText(/address/i)).toBeVisible()
        expect(screen.getByText(/dns name/i)).toBeVisible()
        expect(screen.getByText(/description/i)).toBeVisible()
        expect(screen.getByText(/actions/i)).toBeVisible()
    })
    describe('GlobalInputFilter', () => {
        it('should be displayed when specified', () => {
            render(<IPTable {...ipTableProps} allowGlobalFilter />)
            expect(screen.getByRole('textbox', {name: /search all columns/i})).toBeVisible()
        })
        it('should not displayed when not specified', () => {
            render(<IPTable {...ipTableProps} />)
            expect(screen.queryByRole('textbox', {name: /search all columns/i})).not.toBeInTheDocument()
        })
    })
})
