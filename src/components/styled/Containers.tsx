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
    left: 0;
    width: 300px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 10000;
    padding-inline-start: 0px;
    list-style-type: none;
    align-items: center;
    gap:20px;
    ${props => props.open && css`animation: menu 1s linear;`}

    @keyframes menu {
        0% {
            transform: translateX(-100%)
        }
        100% {
            transform: translateX(0)
        }
    }
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