import { useEffect } from "react";
import { CommentContainer } from "../../components/styled/Containers";
import { CommentBody } from "./Post.styled";
import { getCommentForPost } from "../../services/http.services";
import { API } from "../../services/http-url";
import { COMMENT_ACTION_TYPES } from "../../state/actions/action.types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getComment } from "../../state/selectors/app.selectors";
import { TitleH3 } from "../../components/styled/Typography";

const PostComment = () => {
    const params = useParams();
    const comment = useSelector(getComment);
    useEffect(() => {
        getCommentForPost(API.COMMENT_GET_BY_ID_POST, params?.id, COMMENT_ACTION_TYPES.GET_COMMENT_FOR_POST)
    }, [])

    return (
        <CommentContainer>
            <TitleH3>Comments</TitleH3>
            <hr/>
            <CommentBody>{comment?.comment}</CommentBody>
        </CommentContainer>
    )
}

export default PostComment;