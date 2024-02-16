import { Comment } from "../../types/comment.types";
import { CommentBody } from "./Post.styled";

type PostCommentType = {
    comment: Comment;
}

const PostComment = (props: PostCommentType) => {
    return (
        <div>
            <CommentBody>{props.comment?.comment}</CommentBody>
            <hr/>
        </div>
    )
}

export default PostComment;