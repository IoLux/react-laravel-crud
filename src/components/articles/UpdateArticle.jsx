import { useState, useEffect } from "react";
import ServicesDataRoutes from "../../services/ServicesDataRoutes";

const UpdateArticle = (props) => {
  const initialState = {
    id: null,
    title: "",
    slug: "",
    body: "",
  };

  const [article, setArticle] = useState(initialState);
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const getOldArticle = (slug) => {
    ServicesDataRoutes.get(slug)
      .then((res) => {
        setArticle(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getOldArticle(props.match.params.slug);
  }, [props.match.params.slug]);

  const onUpdate = () => {
    var data = {
      title: article.title,
      body: article.body,
    };

    ServicesDataRoutes.update(article.slug, data)
      .then((res) => {
        // setArticle({
        //   id: res.data.id,
        //   title: res.data.title,
        //   slug: res.data.slug,
        //   body: res.data.body,
        // });
        setSubmit(true);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {submit ? (
        <div
          className="container w-100"
          style={{ paddingBottom: "158px", paddingTop: "100px" }}
        >
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <h1>Update Successfull!</h1>
                <a className="btn btn-success mt-4" href="/article">
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container w-100">
            <div className="row justify-content-center">
              <div className="col-md-6">
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

                <div className="form-group mt-2 mb-3">
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

                <button onClick={onUpdate} className="btn btn-success mt-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateArticle;
