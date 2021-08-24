import { useState } from "react";
import ServicesDataRoutes from "../../services/ServicesDataRoutes";

const CreateArticle = () => {
  const initialState = {
    id: null,
    title: "",
    slug: "",
    body: "",
  };

  const [article, setArticle] = useState(initialState);
  const [submited, setSubmited] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const saveArticle = () => {
    var data = {
      title: article.title,
      body: article.body,
    };

    ServicesDataRoutes.create(data)
      .then((res) => {
        setArticle({
          id: res.data.id,
          title: res.data.title,
          slug: res.data.slug,
          body: res.data.body,
        });
        setSubmited(true);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newArticle = () => {
    setArticle(initialState);
    setSubmited(false);
  };

  return (
    <div className="submit-form">
      {submited ? (
        <div>
          <div
            className="container-fluid"
            style={{
              paddingTop: "100px",
              paddingBottom: "134px",
            }}
          >
            <h4 className="text-center">You Submitted Successfully!</h4>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <button
                  className="btn btn-success mt-3 mb-4"
                  onClick={newArticle}
                >
                  Add Another
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={article.title}
              onChange={handleChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Description</label>
            <textarea
              name="body"
              id="body"
              cols="40"
              rows="10"
              className="form-control"
              required
              value={article.body}
              onChange={handleChange}
            />
          </div>

          <button onClick={saveArticle} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateArticle;
