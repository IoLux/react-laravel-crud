const Article = ({ article }) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-6 mb-3 mt-2">
        <div className="card" style={{ width: "30rem" }}>
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <div
              className="btn-group justify-content-center"
              role="group"
              aria-label="Basic example"
            >
              <a
                className="btn btn-primary"
                href={`/article/update/${article.slug}`}
              >
                Update
              </a>
              <a className="btn btn-info" href={`/article/${article.slug}`}>
                Read More...
              </a>
              <a
                className="btn btn-danger"
                href={`/article/delete/${article.slug}`}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
