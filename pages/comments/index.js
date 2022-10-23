import React, {useState} from 'react';
import Link from 'next/link';

const CommentsPage = () => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method : 'POST',
            body : JSON.stringify({comment}),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json();
    }

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method : 'DELETE'
        })
        const data = await response.json();
        fetchComments()
    }

  return (
    <div>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={submitComment}>Submit</button>
        <br/>
        <br/>
        <button onClick={fetchComments}>Load Comments</button>
        {
            comments.map((item) => {
                return (
                    <div key={item.id}>
                        <Link href={`comments/${item.id}`}><p>{item.id}. {item.text}</p></Link>
                        <button onClick={() => deleteComment(item.id)}>Hapus</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CommentsPage