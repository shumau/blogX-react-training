import styled, {css} from 'styled-components';
export const Avatar = styled.div`
   position: fixed;
    top: 20px;
    right: 30px;
    height: 50px;
`

interface Props {
    error: boolean
}

export const Alert = styled.div<Props>`
    padding: 1rem;
    min-width: 200px;
    ${props => props.error ? css`color: #842029;
                                background-color: #f8d7da;
                                border-color: #f5c2c7;` 
                            : css`color: #0f5132;
                                background-color: #d1e7dd;
                                border-color: #badbcc;` }
`
