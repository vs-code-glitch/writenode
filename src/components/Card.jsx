import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config.js";
import { doc, deleteDoc } from "firebase/firestore";
const Card = ({ id, title, description, author, toggle, setToggle }) => {
  const navigate = useNavigate();

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  async function handleDelete() {
    const document = doc(db, "posts", id);
    await deleteDoc(document);
    setToggle(!toggle);
  }

  async function handleEdit() {
    const document = doc(db, "posts", id);
    console.log(document.data());
    navigate(`/edit/${id}`);
  }
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author">{author.name}</span>
        <span className="controls">
          {isAuth && author.id === auth.currentUser.uid && (
            <span onClick={handleEdit} className="edit">
              <i className="bi bi-pencil-square"></i>
            </span>
          )}
          {isAuth && author.id === auth.currentUser.uid && (
            <span onClick={handleDelete} className="delete">
              <i className="bi bi-trash3"></i>
            </span>
          )}
        </span>
      </p>
    </div>
  );
};

export default Card;
