import { Comment } from "../../types/post.types";
import { CommentBody } from "../../components/styled/Post";

type PostCommentType = {
    comment: Comment;
}

const PostComment = (props: PostCommentType) => {
    return (
        <div>
            <CommentBody data-testid = 'comment'>{props.comment?.comment}</CommentBody>
            <hr/>
        </div>
    )
}

export default PostComment;
