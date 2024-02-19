import styled from 'styled-components';

export const AccountInfo = styled.ul`
list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const AccountItem = styled.li`
   font-size: 18px;

   &>span:last-child{
    font-size: 16px;
    font-weight: lighter;
   }
`