import { useState, useEffect } from "react";
import ServicesDataRoutes from "../../services/ServicesDataRoutes";

const DeleteArticle = (props) => {
  const initialState = {
    id: null,
    title: "",
    slug: "",
    body: "",
  };

  const [currentArticle, setCurrentArticle] = useState(initialState);
  const [submit, setSubmit] = useState(false);

  const getArticle = (slug) => {
    ServicesDataRoutes.get(slug)
      .then((res) => {
        setCurrentArticle(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getArticle(props.match.params.slug);
  }, [props.match.params.slug]);

  const deleteArticle = () => {
    ServicesDataRoutes.remove(currentArticle.slug)
      .then((res) => {
        // console.log(res.data);
        // props.history.push("/article"); //use to redirect
        setSubmit(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {submit ? (
        <div>
          <div
            className="container-fluid"
            style={{ paddingTop: "100px", paddingBottom: "100px" }}
          >
            <div className="row justify-content-around">
              <div className="col-md-6">
                <div className="text-center mt-4 mb-4">
                  <div className="container-fluid">
                    <h1>DELETED SUCCESSFULLY!</h1>
                    <a href="/article" className="btn btn-success mt-4 mb-4">
                      Go Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mt-4 mb-3">
              <h1 style={{ color: "red" }}>WARNING</h1>
              <p>a fair warning, to those whom delete the article.</p>
              <p>
                Article that has been deleted, cannot be recover (this meaning
                it will gone pooof!!)
              </p>
              <p>please be caution with the your decision</p>
              <p>if your certain with your decision to delete the article</p>
              <p>click the delete button below.</p>
              <button className="btn btn-danger mt-6" onClick={deleteArticle}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteArticle;
