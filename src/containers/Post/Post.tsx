import {Description, Img, Link, PostContainer} from "./Post.styled";
import {Date, TitleH3} from "../../components/styled/Typography";
import {Post as PostElement} from "../../types/post.types";

type PostType = {
    post: PostElement;
}

const Post = (props: PostType) => {
    const {post} = props;
    return (
        <Link key={post.id} to={"/post/" + post.id}>
            <PostContainer>
                <div>
                    <Img src={post.image} alt={post.title} />
                </div>
                <div>
                    <TitleH3>{post.title}</TitleH3>
                    <Date>{post.publishedAt}</Date>
                    <Description>{post.content} </Description>
                </div>
            </PostContainer>
        </Link>
    );
}

export default Post;
