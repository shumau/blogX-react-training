import { Comment, Post } from "../../types/post.types";
import PostsReducer from "./posts.reducer";

const posts: Post[] = [
    {
        "id": 1,
        "slug": "lorem-ipsum",
        "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at. Ipsum molestie phasellus euismod sagittis mauris, erat ut. Gravida morbi, sagittis blandit quis ipsum mi mus semper dictum amet himenaeos. Accumsan non congue praesent interdum habitasse turpis orci. Ante curabitur porttitor ullamcorper sagittis sem donec, inceptos cubilia venenatis ac. Augue fringilla sodales in ullamcorper enim curae; rutrum hac in sociis! Scelerisque integer varius et euismod aenean nulla. Quam habitasse risus nullam enim. Ultrices etiam viverra mattis aliquam? Consectetur velit vel volutpat eget curae;. Volutpat class mus elementum pulvinar! Nisi tincidunt volutpat consectetur. Primis morbi pulvinar est montes diam himenaeos duis elit est orci. Taciti sociis aptent venenatis dui malesuada dui justo faucibus primis consequat volutpat. Rhoncus ante purus eros nibh, id et hendrerit pellentesque scelerisque vehicula sollicitudin quam. Hac class vitae natoque tortor dolor dui praesent suspendisse. Vehicula euismod tincidunt odio platea aenean habitasse neque ad proin. Bibendum phasellus enim fames risus eget felis et sem fringilla etiam. Integer.",
        "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
        "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
        "status": "published",
        "category": "lorem",
        "publishedAt": "04/02/2023 13:25:21",
        "updatedAt": "14/03/2023 17:22:20",
        "userId": 1
    },
    {
        "id": 2,
        "slug": "condimentum.",
        "url": "https://jsonplaceholder.org/posts/condimentum.",
        "title": "Quisque non ligula laoreet, volutpat velit cursus, condimentum arcu.",
        "content": "Placerat erat consectetur mauris sollicitudin facilisis praesent nam nascetur! Semper odio est condimentum sollicitudin fames orci porttitor consequat platea urna. Sit faucibus luctus sollicitudin, purus euismod. Volutpat habitasse molestie magnis tempus tempus conubia! Quam fringilla vitae, lacus tortor fusce. Ante enim pretium proin nec, bibendum tempus ipsum porta. Hac nunc nunc pretium! Mauris consectetur, nulla taciti class. Porttitor, nulla rutrum integer torquent accumsan magnis? Morbi condimentum senectus pulvinar duis; himenaeos adipiscing. Lacus facilisi ad scelerisque vestibulum nisl. Mi torquent curae; gravida molestie sagittis imperdiet habitasse aenean mus. Nibh nibh nisl parturient odio eros lorem suspendisse blandit torquent cum elementum. Nibh feugiat metus cursus rutrum feugiat lacinia suspendisse suscipit mollis dolor eget nisl. Adipiscing ullamcorper lobortis in. Tellus taciti fames elit consectetur laoreet pulvinar. Potenti tristique a mus, eget pharetra! Viverra.",
        "image": "https://dummyimage.com/800x430/08110f/condimentum..png&text=jsonplaceholder.org",
        "thumbnail": "https://dummyimage.com/200x200/08110f/condimentum..png&text=jsonplaceholder.org",
        "status": "published",
        "category": "lorem",
        "publishedAt": "25/12/2022 13:10:07",
        "updatedAt": "19/01/2023 08:25:17",
        "userId": 2
    }
]

const comments: Comment[] = [
    {
        "id": 1,
        "postId": 1,
        "userId": 1,
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi."
    },
    {
        "id": 2,
        "postId": 1,
        "userId": 1,
        "comment": "Nulla quis libero vel orci rutrum suscipit. Proin pretium ligula et dapibus interdum. Sed commodo, dui vel feugiat hendrerit, enim nibh commodo nisi, quis mollis nunc lectus ut nisi. Sed ut lectus ac nisi vulputate consequat nec ac nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vulputate magna vitae nibh tincidunt vestibulum. Duis suscipit nulla sit amet neque varius, ut efficitur lorem bibendum. Maecenas euismod euismod velit sit amet faucibus."
    },
    {
        "id": 3,
        "postId": 3,
        "userId": 2,
        "comment": "Cras ac elit sit amet mi placerat bibendum. Sed eleifend turpis vitae enim commodo, a lacinia ipsum ornare. Curabitur cursus pharetra ante, at malesuada erat. Suspendisse potenti. Aliquam erat volutpat. Praesent aliquet risus vitae arcu aliquet porttitor. Donec vestibulum malesuada libero quis feugiat. Integer efficitur ullamcorper sapien, at auctor mi tincidunt vel. Fusce sit amet turpis nec quam ullamcorper molestie. Vestibulum varius augue a semper malesuada. Donec sollicitudin, magna vitae semper euismod, arcu velit tristique massa, in pretium tellus odio eget nisl."
    }
]

describe('posts reducer', ()=>{
    const INITIAL_POSTS_STATE = {
        list: [],
        post: {},
        comments: []
    }

    it('should return default state when passed an empty action', ()=>{
        const result = PostsReducer(undefined, {type: ''});
        expect(result).toEqual(INITIAL_POSTS_STATE)
    })

    it('changing state with action with type LIKED_POST', ()=>{
        const action = {type: 'LIKED_POST', payload: posts[0].id}
        const result = PostsReducer(INITIAL_POSTS_STATE, action)
        expect(result.liked[posts[0].id].postId).toBe(posts[0].id)
    })

    it('changing state with action with type LOAD_ALL_POSTS', ()=>{
        const action = {type: 'LOAD_ALL_POSTS', payload: posts}
        const result = PostsReducer(INITIAL_POSTS_STATE, action)
        expect(result.list).toEqual(posts)
    })

    it('changing state with action with type LOAD_POST', ()=>{
        const action = {type: 'LOAD_POST', payload: posts[0]}
        const result = PostsReducer(INITIAL_POSTS_STATE, action)
        expect(result.post).toEqual({[posts[0].id]: posts[0]})
    })

    it('changing state with action with type LOAD_ALL_COMMENTS', ()=>{
        const action = {type: 'LOAD_ALL_COMMENTS', payload: comments}
        const result = PostsReducer(INITIAL_POSTS_STATE, action)
        expect(result.comments).toEqual(comments)
    })
})