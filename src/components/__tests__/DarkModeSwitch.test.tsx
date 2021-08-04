import { DarkModeSwitch } from "components/DarkModeSwitch"
import { render, screen } from "utils/testUtils"
import user from '@testing-library/user-event'
import * as chakra from '@chakra-ui/react'

describe('DarkModeSwitch', () => {
    it('should show a button that toggles dark mode', () => {
        render(<DarkModeSwitch />)

        const button = screen.getByRole('button', {name: /dark mode/i})
        expect(button).toBeVisible()
    })
    it('should toggle dark mode on button click', () => {
        // Arrange 
        const mockToggle = jest.fn()
        jest.spyOn(chakra, 'useColorMode').mockReturnValue({toggleColorMode: mockToggle} as any)
        
        //Act
        render(<DarkModeSwitch />)
        const button = screen.getByRole('button', {name: /dark mode/i})
        user.click(button)
        
        // Assert
        expect(mockToggle).toHaveBeenCalledTimes(1)
    })
})

