import {Wrapper} from "../../components/styled/Containers";
import {Container, Field, Form, Input, Label, Title} from "../../components/form/styled/Form";
import FieldError from "../../components/form/FieldError";
import {SubmitContainer} from "../../components/form/styled/Form";
import {SubmitFormButton} from "../../components/styled/Buttons";

const LoginPage = () => {
    const handleSubmit = () => {}
    const handleChange = () => {}

    const errors = {
        username: "",
        password: "",
        all: "",
    }
    return (
        <Wrapper>
            <Container>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit} noValidate >
                    <Field>
                        <Label htmlFor="username">Username</Label>
                        <Input type='text' name='username' onChange={handleChange}/>
                        <FieldError error={errors?.username}/>
                    </Field>
                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Input type='password' name='password' onChange={handleChange}/>
                        <FieldError error={errors?.password}/>
                    </Field>
                    <SubmitContainer>
                        <SubmitFormButton type='submit'>Log IN</SubmitFormButton>
                        <FieldError error={errors?.all}/>
                    </SubmitContainer>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default LoginPage;
