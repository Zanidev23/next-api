const Comment = ({comment}) => {
    return (
        <div>
            <p>{comment.id}. {comment.text}</p>
        </div>
    )
}

export default Comment;

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:3000/api/comments');
    const data = await response.json();

    const paths = data.map((item) => {
        return {
            params : {
                commentId : `${item.id}`
            }
        }
    })

    return {
        paths,
        fallback : false
    }
}


export const getStaticProps = async (context) => {
    const {params} = context
    const response = await fetch(`http://localhost:3000/api/comments/${params.commentId}`)
    const data = await response.json();

    return {
        props : {
            comment : data
        }
    }
}