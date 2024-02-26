function FeaturedBlogPost({
  post: { id, title, sellingSentence, imageUrl, altText, author, link },
  scrollToPost,
}) {
  const handleClick = () => {
    scrollToPost(id);
  };

  return (
    <div className="container-blog-post" onClick={handleClick}>
      <div className="container-blog-post-title">
        <img src={imageUrl} alt={altText} className="blog-post--icon" />
        <h2 className="blog-post--title">{title}</h2>
      </div>
      <p className="blog-post--text">{sellingSentence}</p>
      <p className="blog-post--by">{`By: ${author}`}</p>
    </div>
  );
}

export default FeaturedBlogPost;
