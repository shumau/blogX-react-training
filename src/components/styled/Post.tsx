import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 0 80px;
    max-height: 300px;

    @media (max-width:760px) {
        padding: 0 20px;
        max-height: fit-content;
    }

    @media (max-width:590px) {
        flex-direction: column;
    }

    &>div{
        flex: 1 1 0;
    }

    & img{
       width: 100%;
    }
`

export const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
`

export const Img = styled.img`
    margin-bottom: 30px;
    max-height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 100%;
`
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 80px;

    @media (max-width:760px) {
        padding: 0 20px;
    }
`

export const Description = styled.p`
     display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`

export const CommentBody = styled.p`
    color: black;
`
