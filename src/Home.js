import BlogList from "./BlogList";
import BasicExample from "./Spinner";
import useFetch from "./useFetch";

const Home = () => {
const {data,isPending,error}=useFetch('https://qasemmo.onrender.com/getAllArticles')
console.log(data);
    return (
        <div className="home">
            {error &&<div>{error}</div> }
            {isPending && <BasicExample/>}
            {data && <BlogList blogs={data}/>}
        </div>
      
    );
}

export default Home;