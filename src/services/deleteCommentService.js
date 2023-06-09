import http from "./httpService";

export const deleteComment = (id) => {
   return http.delete(`/comments/${id}`);
};
