import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const Post = () => {

    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/post');
            const data = await response.json();
            setPost(data)
        }
        fetchData()
    }, []);

    const submitPost = async () => {
        const response = await fetch('/api/post', {
            method : 'POST',
            body : JSON.stringify({posts}),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json();
    }

  return (
    <div>
        <input type="text" value={posts} onChange={(e) => setPosts(e.target.value)}/>
        <button onClick={submitPost}>Kirim</button>
        <br/>
        <br/>
        <br/>
        {
            post.map((item) => {
                return (
                    <div key={item.id}>
                        <Link href={`post/${item.id}`}><p>{item.id}. {item.title}</p></Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Post