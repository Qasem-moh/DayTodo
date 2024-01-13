import React from 'react';
import {useParams} from "react-router-dom";
import BasicExample from "./Spinner";
import useFetch from "./useFetch";

function BlogDetailsT(props) {
    const {type}=useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogst/' + type);

    return (
        <div className="blog-details">
            {isPending && <>{<BasicExample/>}</>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <h4>{'http://localhost:8000/blogst/' + type}</h4>
        </div>
    );
}

export default BlogDetailsT;