import {useState} from "react";

const Create = () => {
    const [title,setTiltle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('other');
    const [typeB,setTypeB]=useState('other')
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <label>Blog title: </label>
            <input
                type="text"
                value={title}
                required
            onChange={(e)=>setTiltle(e.target.value)}
            />

            <label>Blog body: </label>
            <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            >
            </textarea>

            <label>Blog author</label>
            <input
                type="text"
                value={author}
                required
                onChange={(e)=>setAuthor(e.target.value)}

            />

            <label>Blog type</label>
            <select
                value={typeB}
                onChange={(e)=>setTypeB(e.target.value)}

            >
                <option value="since">Since</option>
                <option value="history">History</option>
                <option value="media">Media</option>
                <option value="visics">visit</option>
            </select>
            <button>Add Blog</button>
        </div>
    );
}

export default Create;