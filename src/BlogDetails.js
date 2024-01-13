import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import BasicExample from "./Spinner";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
const history=useHistory()
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/')
        })
        console.log('http://localhost:8000/blogs/' + id)
    }
    return (
        <div className="blog-details">
            { isPending && <>{<BasicExample/>}</> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
            {/*<h4>{'http://localhost:8000/blogs/' + id}</h4>*/}
        </div>
    );
}

export default BlogDetails;