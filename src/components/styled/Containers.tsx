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
    
`
export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`
export const Navigation = styled.div`
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

