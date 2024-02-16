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

export const Loading = styled.div`
    border: 10px solid #f3f3f3;
    border-top: 10px solid #34db3f;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
