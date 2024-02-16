import {useEffect} from "react";
import { useSelector } from "react-redux";
import {getData} from "../../services/http.services";
import {API} from "../../services/http-url";
import {POST_ACTION_TYPES} from "../../state/actions/action.types";
import {getPost} from "../../state/selectors/app.selectors";
import {BlogContainer} from "../../components/styled/Containers";
import Post from "../Post/Post";

const HomePage = () => {
    const posts = useSelector(getPost);
    useEffect(() => {
        getData(API.POST, POST_ACTION_TYPES.LOAD)
    }, [])


    return (
        <BlogContainer>
            {posts && posts.length && posts.map(post=> (<Post key={post.id} post={post} />))}
        </BlogContainer>
    )
}

export default HomePage;
