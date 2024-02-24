import "./BlogPost.css";
import { useState } from "react";

export default function BlogPost({ post }) {
  const [fullPost, setFullPost] = useState(false);

  const RevealFullPost = () => {
    console.log("clicked");
    setFullPost(true);
  };

  const CloseFullPost = () => {
    setFullPost(false);
  };

  return (
    <div className="post-container" id={post.id}>
      <article>
        <h3 className="title">{post.title}</h3>
        {post.subtitle ? <h4 className="subtitle">{post.subtitle}</h4> : null}
        <p className="author">Author: {post.author}</p>
        <img src={post.unsplashImage} alt={post.unsplashImageAltText}></img>
        {/* <img className="post-icon" src={post.imageUrl} alt={post.altText}></img> */}
        <div className={`reveal-full-post ${fullPost ? "" : "hidden"}`}>
          <p className="content">{post.content}</p>
        </div>
      </article>
      {/* <img src={post.unsplashImage} alt={post.unsplashImageAltText}></img> */}
      {fullPost ? (
        <button
          type="button"
          className="close-full-post-button"
          onClick={CloseFullPost}
        >
          Close
        </button>
      ) : (
        <button
          type="button"
          className="reveal-full-post-button"
          onClick={RevealFullPost}
        >
          Read more
        </button>
      )}
    </div>
  );
}

// className={`post-list-item ${index < visiblePostsLimit ? "" : "hidden"}`}
