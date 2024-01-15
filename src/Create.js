import {useState} from "react";
import {useHistory} from "react-router-dom";
import BasicExample from "./Spinner";

const Create = () => {
    const [title,setTiltle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('other');
    // const [typeB,setTypeB]=useState('other')
    const[isPendding,setIspendding]=useState(false)
    const history=useHistory()

    const handleSubmits=(e)=>{
    e.preventDefault()
        {<BasicExample/>}
        const blog={title,body,author};
        fetch('https://qasemmo.onrender.com/article',{
            method:'POST',
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(blog)

        }).then(()=>{
            console.log("new blog added")
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmits}>
                <label>Blog title: </label>
                <input
                    type="text"
                    value={title}
                    required
                    placeholder="Enter tilte blog"
                    onChange={(e) => setTiltle(e.target.value)}
                />

                <label>Blog body: </label>
                <textarea
                    required
                    value={body}
                    placeholder="Enter body blog"
                    onChange={(e) => setBody(e.target.value)}
                >
            </textarea>

                <label>Blog author</label>
                <input
                    type="text"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}

                />

                {/* <label>Blog type</label>
                <select
                        required
                    value={typeB}
                    onChange={(e) => setTypeB(e.target.value)}

                >
                    <option value="since">Since</option>
                    <option value="history">History</option>
                    <option value="media">Media</option>
                    <option value="visics">visit</option>
                </select> */}
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;