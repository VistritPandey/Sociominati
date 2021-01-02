import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { db } from "./Firebase";
import firebase from "firebase";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [feedImage, setfeedImage] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: "description",
      message: input,
      photoUrl: user.photoUrl,
      image: feedImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setfeedImage("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Post something"
            />
            <input
              value={feedImage}
              onChange={(e) => setfeedImage(e.target.value)}
              className="imageInput"
              type="text"
              placeholder="Image Url"
            />
            <button onClick={sendPost} className="light" type="submit">
              <SendOutlinedIcon className="lightblue" />
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
        </div>
      </div>
      {posts.map(
        ({ id, data: { name, message, photoUrl, timestamp, image } }) => (
          <Post
            key={id}
            name={name}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
            image={image}
          />
        )
      )}
    </div>
  );
}

export default Feed;
