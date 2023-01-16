import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
console.log(blogData);
function App() {
  return (
   <>
      <Header name= {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticleList posts={blogData.posts}/>
      </>
  );
}
export default App;