import http from "../http-common";

const getAll = () => {
  // return http.get("/article");
  return http.get("/posts"); //fake api
};

const get = (slug) => {
  // return http.get(`/article/${slug}`);
  return http.get(`/posts/${slug}`); //fake api
};

const create = (data) => {
  // return http.post("/article/create", data);
  return http.post("/posts", data); //fake api
};

const update = (slug, data) => {
  // return http.post(`/article/update/${slug}`, data);
  return http.post(`/posts/${slug}`, data); //fake api
};

const remove = (slug) => {
  // return http.delete(`/article/delete/${slug}`);
  return http.delete(`/posts/${slug}`); //fake api
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, get, create, update, remove };
