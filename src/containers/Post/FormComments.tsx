import { Form} from "../../components/form/styled/Form"
import { SubmitFormButton } from "../../components/styled/Buttons"
import { Textarea } from "./Post.styled"


const FormComments = () => {
    return (
        <Form>
            <Textarea name="comment" id="comment"></Textarea>
            <SubmitFormButton>Comment</SubmitFormButton>
        </Form>
    )
}

export default FormComments