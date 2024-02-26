// import FeaturedBlogPost from "./FeaturedBlogPost";
// import "./FeaturedBlogPost.css";
// import { blogPosts } from "../../data";

// function FeaturedBlogPostList() {
//   console.log("Imported blogPosts:", blogPosts);

//   // Choose which three blog posts to display by specifying their indexes
//   const postIndexesToShow = [0, 4, 2];

//   // Filter the blogPosts array based on the selected indexes
//   const featuredPosts = postIndexesToShow.map((index) => blogPosts[index]);

//   return (
//     <section>
//       <nav>
//         {/* Display the selected featured blog posts */}
//         <ul className="container-all-blog-post">
//           {featuredPosts.map((post) => (
//             <li>
//               <FeaturedBlogPost
//                 key={post.id}
//                 title={post.title}
//                 sellingSentence={post.sellingSentence}
//                 imageUrl={post.imageUrl}
//                 altText={post.altText}
//                 author={post.author}
//                 link={post.link}
//               />
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </section>
//   );
// }

// export default FeaturedBlogPostList;

import React from "react";
import { Link } from "react-router-dom";
import FeaturedBlogPost from "./FeaturedBlogPost";
import { blogPosts } from "../../data";
import "./FeaturedBlogPost.css";

function FeaturedBlogPostList() {
  const postIndexesToShow = [0, 4, 2];
  const featuredPosts = postIndexesToShow.map((index) => blogPosts[index]);

  return (
    <section>
      <nav>
        <ul className="container-all-blog-post">
          {featuredPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>
                <FeaturedBlogPost
                  title={post.title}
                  sellingSentence={post.sellingSentence}
                  imageUrl={post.imageUrl}
                  altText={post.altText}
                  author={post.author}
                  // link={post.link}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default FeaturedBlogPostList;
