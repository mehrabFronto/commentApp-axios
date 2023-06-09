import styles from "./commentApp.module.css";
import CommentsList from "../CommentsList/CommentsList";
import FullComment from "../FullComment/FullComment";
import CommentForm from "../CommentForm/CommentForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllComments } from "../../services/getAllCommentsService";
import { addNewComment } from "../../services/addNewCommentService";
import { deleteComment } from "../../services/deleteCommentService";

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

   const postHandler = async (comment, setComment) => {
      // post new data
      try {
         await addNewComment({
            ...comment,
            postId: 1,
         });
         // get new data
         const { data } = await getAllComments();
         // set new data
         setComments(data);
         // clear the inputs
         setComment({ name: "", email: "", body: "" });

         toast.success("comment successfully added");
      } catch (err) {
         setError(true);
      }
   };

   const deleteHandler = async (setComment) => {
      // delete data
      try {
         await deleteComment(selectedCommentId);
         // get new data
         const { data } = await getAllComments();
         // set new data
         setComments(data);
         //  clear full comment section
         setSelectedCommentId(undefined);
         setComment([]);

         toast.success("comment successfully deleted");
      } catch (err) {
         setError(true);
      }
   };

   return (
      <div className={styles.container}>
         <CommentsList
            comments={comments}
            onSelect={selectHandler}
            err={error}
         />

         <FullComment
            selectedCommentId={selectedCommentId}
            onDelete={deleteHandler}
         />

         <CommentForm onAddComment={postHandler} />
      </div>
   );
};

export default CommentApp;
