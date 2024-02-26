import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getComment, getPost } from "../../state/selectors/post.selectors";
import {getAllComments, getPost as getPostByID} from "../../services/post.services";
import { Post } from "../../types/post.types";
import { Date, TitleH3 } from "../../components/styled/Typography";
import { Details, Img } from "../../components/styled/Post";
import PostComment from "./PostComment";
import FormComments from "./FormComments";

const PostPage = () => {
    const params = useParams();
    const post: Post | {} = useSelector(getPost(params.id));
    const comments = useSelector(getComment(params.id));
    
    useEffect(() => {
        if(params.id) {
            getPostByID(params.id);
            getAllComments();
        }
    }, [params.id])

    return (
        <Details>
            <TitleH3 data-testid = 'post-title'>{(post as Post)?.title}</TitleH3>
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
