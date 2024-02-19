import { useParams } from "react-router-dom";
import { Date, TitleH3 } from "../../components/styled/Typography";
import { Post } from "../../types/post.types";
import { Details, Img } from "./Post.styled";
import { useEffect } from "react";
import { getData, getDataByID } from "../../services/http.services";
import { API } from "../../services/http-url";
import { POST_ACTION_TYPES } from "../../state/actions/action.types";
import { useSelector } from "react-redux";
import {  getComment, getPost } from "../../state/selectors/app.selectors";
import PostComment from "./PostComment";
import { IState } from "../../interfaces/app.interface";
import FormComments from "./FormComments";

const PostPage = () => {
    const params = useParams();
    const post = useSelector(getPost);
    const comments = useSelector((state: IState) => getComment(state, params?.id));

    useEffect(() => {
        getDataByID(API.POST_GET_BY_ID, params?.id, POST_ACTION_TYPES.GET_BY_ID)
    }, [])

    
    useEffect(() => {
        getData(API.COMMENT, POST_ACTION_TYPES.GET_COMMENTS)
    }, [])

    return (
        <Details>
            <TitleH3>{(post as Post)?.title}</TitleH3>
            <Date>{(post as Post)?.publishedAt}</Date>
            <Img src={(post as Post)?.image} alt={(post as Post)?.title} />
            <p style={{marginBottom:150}}>{(post as Post)?.content}</p>
            <div>
                <TitleH3>Comments</TitleH3>
                <FormComments/>
                <hr/>
                {comments && comments.map(comment=> (<PostComment key={comment.id} comment={comment} />))}
            </div>
           
        </Details>
    )
}

export default PostPage;
