import React, { useEffect, useState } from "react";
import Page from "../../src/layout/Page";
import blog from "../../src/services/blog";
import { useRouter } from "next/router";

const Article = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState([]);

  const getArticle = async () => {
    const res = await blog.getArticle(id);
    setArticle(res.data);
  };

  useEffect(() => {
    if (id) getArticle(id);
  }, [id]);

  return (
    <div className="article mx-24 my-8">
      <img className="mx-auto max-w-3xl" src={article.image_url} alt="" />
      <h1 className="text-center">{article.title}</h1>
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>
    </div>
  );
};

Article.Layout = Page;
export default Article;
