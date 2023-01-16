import React from "react";
import Article from "./Article";
const ArticleList = ({ posts })=>{
    const articleItem = posts.map((post, id) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    });
    return (
        <main>
            {articleItem}
        </main>
    )
}
export default ArticleList