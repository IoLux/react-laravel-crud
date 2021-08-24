import http from "../http-common";

const getAll = () => {
  return http.get("/article");
};

const get = (slug) => {
  return http.get(`/article/${slug}`);
};

const create = (data) => {
  return http.post("/article/create", data);
};

const update = (slug, data) => {
  return http.post(`/article/update/${slug}`, data);
};

const remove = (slug) => {
  return http.delete(`/article/delete/${slug}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, get, create, update, remove };
