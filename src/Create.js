const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <label>Blog title: </label>
            <input type="text" required/>

            <label>Blog body: </label>
            <textarea required>
            </textarea>

            <label>Blog author</label>
            <input type="text" required/>

            <label>Blog type</label>
            <select>
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