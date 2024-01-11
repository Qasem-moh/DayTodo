import BlogList from "./BlogList";
import BasicExample from "./Spinner";
import useFetch from "./useFetch";

const Home = () => {
const {data,isPending,error}=useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error &&<div>{error}</div> }
            {isPending && <BasicExample/>}
            {data && <BlogList blogs={data}/>}
        </div>
    );
}

export default Home;