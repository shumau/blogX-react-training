import { SubmitFormButton } from "../../components/styled/Buttons"
import { CommentDiv } from "../../components/styled/Containers"
import { CommentInput } from "./Post.styled"

const FormComments = () => {
    return (
        <CommentDiv>
            <CommentInput name="comment" id="comment"></CommentInput>
            <SubmitFormButton>Comment</SubmitFormButton>
        </CommentDiv>
    )
}

export default FormComments