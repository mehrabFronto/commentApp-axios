import styles from "./commentsLits.module.css";
import Comment from "../Comment/Comment";
import { toast } from "react-toastify";

const Comments = ({ comments, onSelect, err }) => {
   const renderComments = () => {
      if (err) {
         toast.error("there is an error");
         return <p>fetching data failed...</p>;
      }

      // loading message while data is fetching
      if (comments.length === 0)
         return (
            <div>
               <h3>loading...</h3>
            </div>
         );

      return comments.map((comment) => {
         return (
            <Comment
               key={comment.id}
               comment={comment}
               onSelect={onSelect}
            />
         );
      });
   };

   const headerStyles = {
      color: "#053c5e",
      marginBottom: "10px",
   };

   return (
      <>
         <h2 style={headerStyles}>Comments</h2>
         <div className={styles.comments__container}>
            <div className={styles.comments__wrapper}>{renderComments()}</div>
         </div>
      </>
   );
};

export default Comments;
