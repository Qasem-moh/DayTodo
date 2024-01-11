import {useEffect, useState} from "react";
import BlogList from "./BlogList";
import BasicExample from "./Spinner";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setISPending] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setISPending(false)
                })
        }, 1000)
    }, [])

    return (
        <div className="home">
            {isPending && <BasicExample/>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
    );
}

export default Home;