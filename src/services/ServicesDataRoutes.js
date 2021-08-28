import http from "../http-common";

const getAll = () => {
  return http.get("/posts");
};

const get = (slug) => {
  return http.get(`/posts/${slug}`);
};

const create = (data) => {
  return http.post("/posts/create", data);
};

const update = (slug, data) => {
  return http.post(`/posts/update/${slug}`, data);
};

const remove = (slug) => {
  return http.delete(`/posts/delete/${slug}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, get, create, update, remove };
