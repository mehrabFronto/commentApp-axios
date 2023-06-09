import { useState } from "react";
import styles from "./commentForm.module.css";

const CommentForm = () => {
   const [comment, setComment] = useState({ name: "", email: "", body: "" });

   const changeHandler = (e) => {
      setComment({ ...comment, [e.target.name]: e.target.value });
   };

   const headerStyles = {
      color: "#053c5e",
      marginBottom: "10px",
   };

   return (
      <>
         <h2 style={headerStyles}>Add New Comment</h2>
         <form
            className={styles.form}
            onSubmit={(e) => console.log(comment)}>
            {/* name */}
            <div className={styles.input__wrapper}>
               <label>name : </label>
               <input
                  type="text"
                  name="name"
                  value={comment.name}
                  onChange={changeHandler}
               />
            </div>
            {/* email */}
            <div className={styles.input__wrapper}>
               <label>email : </label>
               <input
                  type="eamil"
                  name="email"
                  value={comment.email}
                  onChange={changeHandler}
               />
            </div>
            {/* content */}
            <div className={styles.textArea__wrapper}>
               <label>content : </label>
               <textarea
                  name="body"
                  value={comment.body}
                  onChange={changeHandler}></textarea>
            </div>
            <div className={styles.btn__container}>
               <button
                  type="submit"
                  className={styles.addBtn}>
                  Add Comment
               </button>
            </div>
         </form>
      </>
   );
};

export default CommentForm;
