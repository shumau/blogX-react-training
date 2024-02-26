import { Form} from "../../components/form/styled/Form"
import { SubmitFormButton } from "../../components/styled/Buttons"
import { Textarea } from "../../components/styled/Post";


const FormComments = () => {
    return (
        <Form>
            <Textarea data-testid = 'comment' name="comment" id="comment"></Textarea>
            <SubmitFormButton>Comment</SubmitFormButton>
        </Form>
    )
}

export default FormComments
