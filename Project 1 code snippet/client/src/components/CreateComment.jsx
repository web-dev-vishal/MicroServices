import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateComment = ({ snippet }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8001/api/v1/snippet/${snippet.id}/comment`,
        { text }
      ); 
      setComments([...comments, res.data.comment]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="mt-3">
      {snippet.comments.map((comment, index) => (
        <li key={index} className="text-sm">{comment.content}</li>
      ))}
      <form onSubmit={addComment} className="flex mt-3  items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add comment"
          className="border rounded px-2 text-sm py-1"
        />
        <button className="bg-black text-white px-4">Add</button>
      </form>
    </div>
  );
};

export default CreateComment;
