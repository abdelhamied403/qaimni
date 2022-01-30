import React, { useEffect, useState } from "react";
import ArticleCard from "../src/components/ArticleCard";
import Page from "../src/layout/Page";
import blog from "../src/services/blog";

const Blog = (props) => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await blog.getArticles();
    setArticles(res.data.data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="blog mx-24 mt-8">
      <h1>المدونه</h1>
      <div className="articles">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {articles.map((article) => (
            <ArticleCard {...article} key={article.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

Blog.Layout = Page;
Blog.DisplayName = "Blog";
export default Blog;
