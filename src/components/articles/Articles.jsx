import { useState, useEffect } from "react";
import ServicesDataRoutes from "../../services/ServicesDataRoutes";
import Article from "./Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticle();
  }, []);

  const getAllArticle = () => {
    ServicesDataRoutes.getAll()
      .then((res) => {
        setArticles(res.data);
        // console.log(res.data);
      })
      .catch((error) => [console.log(error)]);
  };

  return (
    <div>
      <small>
        <p>
          Create your Article <a href="/article/new/create">here</a>
        </p>
      </small>
      {articles.length > 0
        ? articles.map((article, index) => {
            return <Article article={article} />;
          })
        : "no data available"}
    </div>
  );
};

export default Articles;
