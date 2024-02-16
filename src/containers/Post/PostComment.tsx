import { CommentContainer } from "../../components/styled/Containers";
import { Comment } from "../../types/post.types";
import { CommentBody } from "../../components/styled/Post";

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
