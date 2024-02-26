import { render } from "@testing-library/react"
import PostComment from "./PostComment"
import { Comment } from "../../types/post.types"

jest.mock('react-redux')

const comment: Comment = {
    "id": 1,
    "postId": 1,
    "userId": 1,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi."
}

describe('PostComment', ()=>{

    it('render PostComment', ()=>{
        const postComment = render(<PostComment comment = {comment}/>)
        expect(postComment).toMatchSnapshot()
    })

    it('textarea should be in the document', ()=>{
        const postComment = render(<PostComment comment = {comment}/>)
        expect(postComment.getAllByTestId('comment')[0].innerHTML).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi.')
    })
})