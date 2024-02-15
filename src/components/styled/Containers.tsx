import styled from 'styled-components';

export const BlockContainer = styled.div`
   max-width: 1980px;
   padding: 0 30px;
   position: relative;
   box-sizing: border-box;
`
export const MainContainer = styled.main`
  width: 100%;
  padding: 20px;
`;
export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 10000;
`
export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`
export const Navigation = styled.ul`
    @media (max-width: 760px){ 
        flex-direction: column;
        background-color: #f7f3f3;
        height: auto;
        padding: 20px 0;
    }
    list-style-type: none;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    gap:20px;
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

