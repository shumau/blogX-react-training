import styled from 'styled-components'
export const NavigationButton = styled.button`
    display: flex;
    position: absolute;
    left: 30px;
    top: 35px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    
    &>span{
        width: 15px;
        height: 3px;
        background-color: black;
    }

    z-index: 100000;
`
export const SubmitFormButton = styled.button`
    min-width: 100%;
    cursor: pointer;
    margin-right: 0.25em;
    margin-top: 0.5em;
    padding:  0.938em;
    border: none;
    border-radius: 4px;
    background-color: rgb(22, 165, 58);
    color: #fefefe;

    &:hover{
        background-color: rgb(6, 73, 11);
        color: #fefefe;
    }
`