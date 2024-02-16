import { useParams } from "react-router-dom";
import { Date, TitleH3 } from "../../components/styled/Typography";
import { Post } from "../../types/post.types";
import { Details, Img } from "./Post.styled";
import { useEffect } from "react";
import { getDataByID } from "../../services/http.services";
import { API } from "../../services/http-url";
import { POST_ACTION_TYPES } from "../../state/actions/action.types";
import { useSelector } from "react-redux";
import { getPost } from "../../state/selectors/app.selectors";

const PostPage = (props: Post) => {
    const params = useParams();
    const post = useSelector(getPost);
    useEffect(() => {
        getDataByID(API.GET_BY_ID, params?.id, POST_ACTION_TYPES.GET_BY_ID)
    }, [])

    return (
        <Details>
            <TitleH3>{(post as Post)?.title}</TitleH3>
            <Date>{(post as Post)?.publishedAt}</Date>
            <Img src={(post as Post)?.image} alt={(post as Post)?.title} />
            <p style={{marginBottom:150}}>{(post as Post)?.content}</p>
        </Details>
    )
}

export default PostPage;
