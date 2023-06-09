import styles from "./commentApp.module.css";
import CommentsList from "../CommentsList/CommentsList";
import FullComment from "../FullComment/FullComment";
import CommentForm from "../CommentForm/CommentForm";
import { useEffect, useState } from "react";
import { getAllComments } from "../../services/getAllCommentsService";

const CommentApp = () => {
   const [comments, setComments] = useState([]);
   const [selectedCommentId, setSelectedCommentId] = useState();
   const [error, setError] = useState(false);

   const selectHandler = (commentId) => setSelectedCommentId(commentId);

   useEffect(() => {
      const getComments = async () => {
         // get and set all comments
         try {
            const { data } = await getAllComments();
            setComments(data);
         } catch (error) {
            setError(true);
         }
      };

      getComments();
   }, []);

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
