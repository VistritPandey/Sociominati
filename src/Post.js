import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Post({ name, message, photoUrl, timestamp, image }) {
  const user = useSelector(selectUser);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="lightgreen"
        />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="orange" />
      </div>
    </div>
  );
}

export default Post;
