import QuillEdictor from "../components/QuillEdictor";
import 'react-quill/dist/quill.snow.css';

import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [value, setValue] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("value", value);
        data.set("file", files[0]);
        ev.preventDefault();
        const response = await fetch("http://localhost:4000/createPost", {
            method: "POST",
            body: data,
            credentials: "include",
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={"/"} />;
    }
    return (
        <form onSubmit={createNewPost}>
            <input
                type="title"
                placeholder={"Title"}
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
                type="summary"
                placeholder={"Summary"}
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
            />
            <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
            <QuillEdictor value={value} onChange={setValue} />
            <Link className="CreatePost_but" style={{marginTop: "20px"}}> Create Post</Link>
        </form>
    );
}

export default CreatePost;
