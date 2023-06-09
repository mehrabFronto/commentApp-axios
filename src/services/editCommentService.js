import http from "./httpService";

export const editComment = (id, newComment) => {
   return http.put(`/comments/${id}`, newComment);
};
