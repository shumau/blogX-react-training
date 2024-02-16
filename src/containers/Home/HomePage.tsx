import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../services/post.services";
import { selectAllPosts } from "../../state/selectors/post.selectors";
import { BlogContainer } from "../../components/styled/Containers";
import Post from "../../components/Post";

const HomePage = () => {
    const posts = useSelector(selectAllPosts);

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <BlogContainer>
            {posts && posts.length && posts.map(post=> (<Post key={post.id} post={post} />))}
        </BlogContainer>
    )
}

export default HomePage;
