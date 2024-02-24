import "./App.css";
import Hero from "./components/Hero/Hero";
import Divider from "./components/Divider/Divider";
import FeaturedBlogPostList from "./components/FeaturedBlogPost/FeaturedBlogPostList";
import Banner from "./components/Banner/Banner";
import BlogPostList from "./components/BlogPostList/BlogPostList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Divider text={"Featured Blog Post"} />
      <FeaturedBlogPostList />
      <Banner />
      <Divider text={"Blog Post"} />
      <BlogPostList />
      <Footer />
    </>
  );
}

export default App;
