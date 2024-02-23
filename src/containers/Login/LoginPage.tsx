import {Wrapper} from "../../components/styled/Containers";
import {Container, Field, Form, Input, Label, Title} from "../../components/form/styled/Form";
import FieldError from "../../components/form/FieldError";
import {SubmitContainer} from "../../components/form/styled/Form";
import {SubmitFormButton} from "../../components/styled/Buttons";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../state/selectors/user.selectors";
import { FormEvent, useEffect, useState } from "react";
import { getAllUsers, getUser as getUserByID } from "../../services/user.services";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const users = useSelector(selectAllUsers);

    const navigate = useNavigate()

    const [errors, setErrors] = useState({
                                            username: "",
                                            password: "",
                                            all: "",
                                        })

    useEffect(() => {
        getAllUsers()
    }, [])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const error = {
            username: "",
            password: "",
            all: "",
        };
        const username = event.currentTarget.username.value;
        const password = event.currentTarget.password.value;
        const user = users.filter(user => user.login.username === username && user.login.password === password);
        const userId = user && user.length ? user[0].id + '' : '';
        if(userId){
            getUserByID(userId)
            navigate('/account')
        } else{
            error.all = "Пользователь не найден!!! Проверьте введенные логин и пароль"
            setErrors(error)
        }
    }

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const error = {
            username: "",
            password: "",
            all: "",
        };
        const {name, value} = event.currentTarget;
        switch (name) {
            case 'username':
                error.username = value.trim().length < 5 ? 'Username must be 5 characters long!': '';
                break;
            case 'password':
                error.password = value.trim().length < 8 ? 'Password must be eight characters long!': '';
                break;
            default:
                break;
        }
        setErrors(error);
    }

    return (
        <Wrapper>
            <Container>
                <Title>Login</Title>
                <Form data-testid = 'form-login' onSubmit={(event) => handleSubmit(event)} noValidate >
                    <Field>
                        <Label htmlFor="username">Username</Label>
                        <Input data-testid = 'username' type='text' name='username' onChange={(event) => handleChange(event)}/>
                        <FieldError error={errors.username}/>
                    </Field>
                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Input data-testid = 'password' type='password' name='password' onChange={(event) => handleChange(event)}/>
                        <FieldError error={errors.password}/>
                    </Field>
                    <SubmitContainer>
                        <SubmitFormButton type='submit'>Log IN</SubmitFormButton>
                        <FieldError error={errors.all}/>
                    </SubmitContainer>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default LoginPage;
