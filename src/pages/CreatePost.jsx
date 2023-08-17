import { addDoc, collection } from "firebase/firestore";
import { useTitle } from "../hooks/useTitle";
import { db, auth } from "../firebase/config.js";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  useTitle("CreatePost");
  const postRef = collection(db, "posts");

  async function handleCreatePost(e) {
    e.preventDefault();
    console.log(auth);
    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  }
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input
          type="text"
          className="title"
          name="title"
          placeholder="title"
          maxLength="50"
          required
        />
        <textarea
          className="description"
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
