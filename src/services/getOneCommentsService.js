import http from "./httpService";

export const getOneComment = (id) => {
   return http.get(`/comments/${id}`);
};
