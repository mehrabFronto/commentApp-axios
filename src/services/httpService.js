import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.response.use(
   (res) => {
      console.log(res);
      return res;
   },
   (err) => {
      console.log(err);
      return Promise.reject();
   },
);

axios.interceptors.request.use(
   (req) => {
      console.log(req);
      return req;
   },
   (err) => {
      console.log(err);
      return Promise.reject();
   },
);

const http = {
   get: axios.get,
   put: axios.put,
   delete: axios.delete,
   post: axios.post,
};

export default http;
