import { useState, useEffect } from "react";
import ServicesDataRoutes from "../../services/ServicesDataRoutes";

const ArticleDetail = (props) => {
  const [article, setArticle] = useState([]);

  const getArticle = (slug) => {
    ServicesDataRoutes.get(slug)
      .then((res) => {
        setArticle(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getArticle(props.match.params.slug);
  }, [props.match.params.slug]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-3 mb-3">
          <h1 className="text-center mt-2 mb-3">{article.title}</h1>
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt="articlepic"
            style={{ width: "30rem" }}
          />
          <p className="mt-4">{article.body}</p>
          <small>
            <a href="/article">
              <i className="bi bi-arrow-left-circle"></i> Go Back
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
