import styles from "./comment.module.css";

const Comment = ({ comment, onSelect }) => {
   return (
      <div
         className={styles.comment__container}
         onClick={() => onSelect(comment.id)}>
         <div className={styles.name__container}>
            <span> name : </span>
            <span className={styles.name}>{comment.name}</span>
         </div>
         <div className={styles.email__container}>
            <span>email : </span>
            <span className={styles.email}>{comment.email}</span>
         </div>
      </div>
   );
};

export default Comment;
