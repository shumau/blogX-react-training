import { CommentContainer } from "../../components/styled/Containers";
import { Comment } from "../../types/comment.types";
import { CommentBody } from "./Post.styled";

type PostCommentType = {
    comment: Comment;
}

const PostComment = (props: PostCommentType) => {
    return (
        <CommentContainer>
            <CommentBody>{props.comment?.comment}</CommentBody>
            <hr/>
        </CommentContainer>
    )
}

export default PostComment;