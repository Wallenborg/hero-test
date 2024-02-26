import { blogPosts } from "../../data";
import FeaturedBlogPost from "./FeaturedBlogPost";
import "./FeaturedBlogPost.css";

function FeaturedBlogPostList() {
  console.log("Imported blogPosts:", blogPosts);

  const postIndexesToShow = [0, 4, 2];
  const featuredPosts = postIndexesToShow.map((index) => blogPosts[index]);

  const scrollToPost = (postId) => {
    const anchorPoint = document.getElementById(postId);
    if (anchorPoint) {
      anchorPoint.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section>
      <nav>
        <ul className="container-all-blog-post">
          {featuredPosts.map((post) => (
            <li key={post.id}>
              <FeaturedBlogPost post={post} scrollToPost={scrollToPost} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default FeaturedBlogPostList;
