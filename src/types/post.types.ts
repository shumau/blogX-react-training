export type Post = {
    id: number,
    slug: string,
    url: string,
    title: string,
    content: string,
    image: string,
    thumbnail: string,
    status: string,
    category: string,
    publishedAt: string,
    updatedAt: string,
    userId: number
}

export type Comment = {
    id: number,
    postId: number,
    userId: number,
    comment: string
}
