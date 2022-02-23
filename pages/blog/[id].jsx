import React, { useEffect, useState } from "react";
import Page from "../../src/layout/Page";
import blog from "../../src/services/blog";
import { useRouter } from "next/router";
import Head from "next/head";

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

  const slugResolve = () => {
    const s = id.split("-");
    s.shift();
    return s.join(" ");
  };

  return (
    <>
      <Head>
        <title>قيمني | {slugResolve()}</title>
      </Head>
      <div className="article mx-24 my-8">
        <img className="mx-auto max-w-3xl" src={article.image_url} alt="" />
        <h1 className="text-center">{article.title}</h1>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </div>
    </>
  );
};

Article.Layout = Page;
Article.DisplayName = "مقاله";
export default Article;
