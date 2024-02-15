import styled from 'styled-components';

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    max-width: 80%;
    min-width: 100px;
    min-height: 300px;
    padding: 20px 40px;
    border-radius: 6px;
    box-shadow: 0px 8px 36px #222;
    background-color: #fefefe;
`

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-family: "Segoe UI", "Ubuntu", "Roboto", "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 2em;
    font-weight: lighter;
    margin-top: 0.25em;
    color: #222;
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
`
export const Label = styled.label`
    margin-bottom: 0.5em;
    color: #444;
    font-weight: lighter;
`

export const Input = styled.input`
    padding: 10px 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d6d1d5;

    &::placeholder{
        font-size: 1.2em;
        font-weight: lighter;
        color: #bbb;
    }
`

export const SubmitContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
