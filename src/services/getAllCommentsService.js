import http from "./httpService";

export const getAllComments = () => {
   return http.get("/comments");
};
