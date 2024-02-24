import "./FeaturedBlogPost.css";

function FeaturedBlogPost({
  title,
  sellingSentence,
  imageUrl,
  altText,
  author,
  link,
}) {
  return (
    <a href={link} aria-label={`Read more about ${title} by ${author}`}>
      <div className="container-blog-post">
        <div className="container-blog-post-title">
          <img src={imageUrl} alt={altText} className="blog-post--icon" />
          <h2 className="blog-post--title">{title}</h2>
        </div>
        <p className="blog-post--text">{sellingSentence}</p>
        <p className="blog-post--by">{`By: ${author}`}</p>
      </div>
    </a>
  );
}

export default FeaturedBlogPost;
