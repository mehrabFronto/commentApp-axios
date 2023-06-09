import "./App.css";
import CommentApp from "./components/CommentApp/CommentApp";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
   return (
      <div className="app">
         <ToastContainer />
         <CommentApp />
      </div>
   );
};

export default App;
