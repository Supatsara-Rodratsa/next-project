import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button, ButtonProps } from '../../components/Button'

const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button label="test" onClick={jest.fn()} {...props} />)
}

afterEach(cleanup)
describe('Button Component', () => {
  it('Should render label correctly', () => {
    const { getByText } = makeSut({ label: 'My Button' })
    expect(getByText(/My Button/)).toBeInTheDocument()
  })

  it('Should call onClick successfully', () => {
    const spy = jest.fn()
    const { getByText } = makeSut({ onClick: spy })
    fireEvent.click(getByText(/test/))
    expect(spy).toHaveBeenCalled()
  })
})
