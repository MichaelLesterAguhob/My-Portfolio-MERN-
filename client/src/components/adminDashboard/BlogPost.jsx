import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BlogPost = () => {
  const API_BASE_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL_DEV : process.env.REACT_APP_API_BASE_URL
  const [addPostBtn, setAddPostBtn] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");
  const [postProjectLink, setPostProjLink] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (postTitle && content && postProjectLink) {
      setAddPostBtn(true);
    } else {
      setAddPostBtn(false);
    }
  }, [postTitle, content, postProjectLink]);

  // SAVING DATA TO DATABASE
  const addPost = async() => {
    setSaving(true);

    try {
      const addPostRespo = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postTitle: postTitle.trim(),
          content: content.trim(),
          projectLink: postProjectLink.trim()
        })
      })

      let respo = await addPostRespo.json();
      if(!addPostRespo.ok) {
        Swal.fire({
          icon: 'error',
          title: "Error Occurred",
          text: respo.message,
          timer: 2000
        })
        console.log(respo.error);
        return;
      } 
      if(respo) {
        Swal.fire({
          icon: 'success',
          text: "Posted Successfully",
          timer: 2000
        })
        setPostTitle("");
        setPostProjLink("");
        setContent("");
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Unexpected Error Occurred',
        timer: 2000
      })
      console.log(error);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="manage-projects bg-slate-600 p-2 mt-4 rounded-[10px]">
      <h1 className="text-2xl">Blog</h1>
      <div className="border-t p-2 flex justify-end">
        <button
          type="button"
          className="btn btn-accent text-black"
          disabled={!addPostBtn || saving}
          onClick={addPost}
        >
          {saving ? "Saving..." : "Add Post"}
        </button>
      </div>

      <div className="grid lg:grid-cols-2">
        <label>Title</label>
        <input
          type="text"
          name="post_title"
          id="post_title"
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
          value={postTitle}
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
          placeholder="Enter Title"
        />

        <label>Content</label>
        <textarea
          type="textA+rea"
          name="content"
          id="content"
          rows="5"
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Enter Content"
        ></textarea>

        <label>Project Link</label>
        <input
          type="text"
          name="link"
          id="link"
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
          value={postProjectLink}
          onChange={(e) => {
            setPostProjLink(e.target.value);
          }}
          placeholder="Enter Link"
        />

        <label>Photos</label>
        <input
          type="file"
          name="photos"
          id="photos"
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1 hover:cursor-pointer"
          // value={}
          // onChange={(e) => {}}
        />
      </div>
    </div>
  );
};

export default BlogPost;
