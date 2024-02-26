import BlogPost from "../Blogpost/BlogPost";
import { blogPosts } from "../../data";
import "./BlogPostList.css";
import { useState } from "react";

export default function BlogPostList() {
  const [visiblePosts, setVisiblePosts] = useState(5);

  //calculate number of cards in total
  const visiblePostsLimit = Math.min(visiblePosts, blogPosts.length);

  //check if all posts are loaded based on total visible posts
  const allPostsLoaded = visiblePostsLimit >= blogPosts.length;

  return (
    <section className="post-list-section">
      <ul className="post-list">
        {blogPosts.map((post, index) => (
          <li
            className={`post-list-item ${
              index < visiblePostsLimit ? "" : "hidden"
            }`}
            key={post.id}
          >
            <BlogPost post={post} />
          </li>
        ))}
      </ul>
      <div className="load-more-posts">
        {allPostsLoaded ? (
          <p className="no-more-posts-message">
            Oops - that is all we have for now. <br />
            Don't worry, more awesome posts coming soon!
          </p>
        ) : (
          <button
            type="button"
            className="load-more-button"
            onClick={() => setVisiblePosts((prev) => prev + 3)}
          >
            Load more blog posts
          </button>
        )}
      </div>
      {/* <div className="fade-out"></div> */}
    </section>
  );
}
