import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
const Home = () => {
  const [posts, setPosts] = useState([false]);
  const [toggle, setToggle] = useState(false);
  useTitle("Home");
  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }

    getPosts();
  }, [postsRef, toggle]);
  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <Card
            id={post.id}
            key={post.id}
            title={post.title}
            description={post.description}
            author={post.author}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};

export default Home;
