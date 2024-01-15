import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import BasicExample from "./Spinner";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('https://qasemmo.onrender.com/getOneArticle/' + id);
const history=useHistory()
    const handleDelete=()=>{
        fetch('https://qasemmo.onrender.com/deleteArticle/'+blog._id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/')
        })
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