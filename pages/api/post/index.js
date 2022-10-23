import { post } from "../../../data/post"

const handler = (req, res) => {
    if(req.method === 'GET') {
        res.status(200).json(post)
    } else if (req.method === 'POST') {
        const posts = req.body.posts;
        const newPosts = {
            id : Date.now(),
            title : posts
        }
        post.push(newPosts)
        res.status(201).json(newPosts)
    }
    
}

export default handler