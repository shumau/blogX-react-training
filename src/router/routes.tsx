import Account from "../containers/Account/Account";
import Home from "../containers/Home/HomePage";
import LoginPage from "../containers/Login/LoginPage";
import PostPage from "../containers/Post/PostPage";

const routes = [
    {
        url: "/",
        component: <Home />
    },
    {
        url: "/home",
        component: <Home />
    },
    {
        url: "/login",
        component: <LoginPage />
    },
    {
        url: "/feed",
        component: <PostPage />
    },
    {
        url: "/post/:id",
        component: <PostPage />
    },
    {
        url: "/account",
        component: <Account />
    }
];

export default routes;
