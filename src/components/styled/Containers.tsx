import styled, { css } from 'styled-components';

export const BlockContainer = styled.div`
   max-width: 1980px;
   height: 100vh;
   padding: 0 30px;
   position: relative;
   box-sizing: border-box;
`
export const MainContainer = styled.main`
  width: 100%;
  padding: 20px;
`;

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

interface Props {
    open: boolean
}

export const Navigation = styled.div<Props>`
    background-color: #e8ffe8;
    position: fixed;
    padding-top: 100px;
    top: 0;
    left: -320px;
    display: flex;
    width: 300px;
    flex-direction: column;
    height: 100vh;
    z-index: 10000;
    padding-inline-start: 0px;
    list-style-type: none;
    align-items: center;
    gap:20px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    ${props => props.open && css` left: 0;`}
`
export const Headers = styled.header`
   padding: 20px 0;
   margin-bottom: 50px;
`
export const Wrapper = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AlertContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: -100px;
    border: 1px solid transparent;
    z-index: 1000000;
    animation: alert 5s linear;
    @keyframes alert {
        0% {
            bottom: -100px;
        }
        10% {
            bottom: 0px;
        }
        90% {
            bottom: 0px;
        }
        100% {
            bottom: -100px;
        }
    }
`

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white; 
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000000000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AccountContainer = styled.div`
    padding: 0 100px;
`