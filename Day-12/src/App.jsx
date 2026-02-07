import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) {
      alert("Please fill in both title and details.");
      return;
    }
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      details: details.trim(),
    };
    setTask([...task, newTask]);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setTask(task.filter((t) => t.id !== id));
    }
  };

  const editNote = (id) => {
    const taskToEdit = task.find((t) => t.id === id);
    setTitle(taskToEdit.title);
    setDetails(taskToEdit.details);
    setEditingId(id);
  };

  const updateNote = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) {
      alert("Please fill in both title and details.");
      return;
    }
    setTask(
      task.map((t) =>
        t.id === editingId
          ? { ...t, title: title.trim(), details: details.trim() }
          : t,
      ),
    );
    setTitle("");
    setDetails("");
    setEditingId(null);
  };

  const cancelEdit = () => {
    setTitle("");
    setDetails("");
    setEditingId(null);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={editingId ? updateNote : submitHandler}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl mb-2 font-bold">
          {editingId ? "Edit Note" : "Add Notes"}
        </h1>
        <label htmlFor="title" className="sr-only">
          Note Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded bg-white text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="details" className="sr-only">
          Note Details
        </label>
        <textarea
          id="details"
          className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded bg-white text-black resize-none"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
        <div className="flex gap-2 w-full">
          <button
            type="submit"
            className="bg-white active:scale-95 font-medium flex-1 outline-none text-black px-5 py-2 rounded"
          >
            {editingId ? "Update Note" : "Add Note"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-500 active:scale-95 font-medium flex-1 outline-none text-white px-5 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.length === 0 ? (
            <p className="text-gray-400">No notes yet. Add one!</p>
          ) : (
            task.map((elem) => (
              <NoteCard
                key={elem.id}
                task={elem}
                onDelete={deleteNote}
                onEdit={editNote}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Separate component for note cards to improve readability and reusability
function NoteCard({ task, onDelete, onEdit }) {
  return (
    <div className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
      <div>
        <h3 className="leading-tight text-lg font-bold">{task.title}</h3>
        <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">
          {task.details}
        </p>
      </div>
      <div className="flex gap-1 w-full">
        <button
          onClick={() => onEdit(task.id)}
          className="flex-1 cursor-pointer active:scale-95 bg-blue-500 py-1 text-xs rounded font-bold text-white"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="flex-1 cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
