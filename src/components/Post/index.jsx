import "./styles.css";
import heart from "../../assets/heart-3510.svg";
import share from "../../assets/880816.svg";
import { useState } from "react";
function Post({ dataPost: post, dataUser: user }) {
  const [like, setLike] = useState(0);
  return (
    <div className="Post">
      <div className="info">
        <img
          src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.username}`}
          alt="Avatar"
        />
        <p className="username">{user.username}</p>
      </div>
      <div className="container">
        <h3 className="title">{post.title}</h3>
        <p className="body">{post.body}</p>
      </div>
      <div className="bottom">
        <div className="btn" onClick={() => setLike(like + 1)}>
          <p>{like}</p>
          <img className="heart" src={heart} />
        </div>
        <div className="btn">
          <img src={share} />
        </div>
      </div>
    </div>
  );
}
export default Post;
