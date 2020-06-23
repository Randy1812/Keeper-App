import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function takeNote(event) {
    const value = event.target.value;
    const name = event.target.name;
    setnote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitnote(event) {
    props.addNote(note);
    event.preventDefault();
    setnote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={takeNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={takeNote}
          value={note.content}
        />
        <button onClick={submitnote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
