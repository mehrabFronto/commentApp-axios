import { useState } from "react";
import styles from "./fullComment.module.css";

const FullComment = ({ selectedCommentId }) => {
   const [comment, setComment] = useState([]);
   const [isShow, setIsShow] = useState(false);

   const headerStyles = {
      color: "#053c5e",
      marginBottom: "10px",
   };

   let commentDetail = (
      <>
         <h2 style={headerStyles}>Full Comment</h2>
         <p className={styles.message}>please select a comment...</p>
      </>
   );

   if (selectedCommentId)
      commentDetail = (
         <>
            <h2 style={headerStyles}>Full Comment</h2>
            <p className={styles.message}>loading....</p>;
         </>
      );

   if (comment.length !== 0)
      commentDetail = (
         <>
            <h2 style={headerStyles}>Full Comment</h2>
            <div className={styles.comment__container}>
               <div className={styles.comment__wrapper}>
                  {/* name */}
                  <div className={styles.name__container}>
                     <span>name :</span>
                     <span>{comment.name}</span>
                  </div>
                  {/* email */}
                  <div className={styles.email__container}>
                     <span>email :</span>
                     <span>{comment.email}</span>
                  </div>
                  {/* body */}
                  <div className={styles.body__container}>
                     <span>body : </span>
                     <p>{comment.body}</p>
                  </div>
                  {/* edit secion */}
                  {isShow && (
                     <EditComment
                        id={selectedCommentId}
                        setIsShow={setIsShow}
                        setComment={setComment}
                     />
                  )}
                  <div className={styles.btnContainer}>
                     <button className={`${styles.btn} ${styles.delete}`}>
                        Delete
                     </button>
                     <button
                        className={`${styles.btn} ${styles.edit}`}
                        onClick={() => setIsShow(!isShow)}>
                        Edit
                     </button>
                  </div>
               </div>
            </div>
         </>
      );

   return commentDetail;
};

export default FullComment;

const EditComment = ({ id, setIsShow, setComment }) => {
   const [newComment, setNewComment] = useState({
      name: "",
      email: "",
      body: "",
   });

   const changeHandler = (e) => {
      setNewComment({ ...newComment, [e.target.name]: e.target.value });
   };

   return (
      <>
         <form
            className={styles.form}
            onSubmit={(e) => {
               e.preventDefault();
               setIsShow(false);
            }}>
            <div className={styles.form__wrapper}>
               {/* name */}
               <div className={styles.input__wrapper}>
                  <label>name : </label>
                  <input
                     type="text"
                     name="name"
                     onChange={changeHandler}
                  />
               </div>
               {/* email */}
               <div className={styles.input__wrapper}>
                  <label>email : </label>
                  <input
                     type="eamil"
                     name="email"
                     onChange={changeHandler}
                  />
               </div>
               {/* body */}
               <div className={styles.textArea__wrapper}>
                  <label>content : </label>
                  <textarea
                     name="body"
                     onChange={changeHandler}></textarea>
               </div>
               <div className={styles.btn__container}>
                  <button
                     className={`${styles.btn} ${styles.cancelBtn}`}
                     type="button"
                     onClick={() => setIsShow(false)}>
                     Cancel
                  </button>
                  <button
                     type="submit"
                     className={`${styles.btn} ${styles.addBtn}`}>
                     Update
                  </button>
               </div>
            </div>
         </form>
      </>
   );
};
