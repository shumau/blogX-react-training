import { render } from "@testing-library/react"
import FormComments from "./FormComments"

jest.mock('react-redux')

describe('FormComments', ()=>{

    it('render FormComments', ()=>{
        const formComments = render(<FormComments/>)
        expect(formComments).toMatchSnapshot()
    })

    it('textarea should be in the document', ()=>{
        const formComments = render(<FormComments/>)
        expect(formComments.getByTestId('comment')).toBeInTheDocument
    })
})