import styles from "./commentApp.module.css";
import CommentsList from "../CommentsList/CommentsList";
import FullComment from "../FullComment/FullComment";
import CommentForm from "../CommentForm/CommentForm";
import { useState } from "react";

const CommentApp = () => {
   const [comments, setComments] = useState([]);
   const [selectedCommentId, setSelectedCommentId] = useState();
   const [error, setError] = useState(false);

   const selectHandler = (commentId) => setSelectedCommentId(commentId);

   return (
      <div className={styles.container}>
         <CommentsList
            comments={comments}
            onSelect={selectHandler}
            err={error}
         />

         <FullComment selectedCommentId={selectedCommentId} />

         <CommentForm />
      </div>
   );
};

export default CommentApp;
