import styles from "./TimelineList.module.css";
import { storage } from "../../fake.ts";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TimelineList() {
  const handleAddBetween = (id:string) =>{
    // const newArr = [...l]
    const addNew = {
      id: uuidv4(),
      title: "...",
      content: "...",
      createAt: "...",
    };
    const index:number = lists.findIndex(item=> item.id === id  )
    console.log(index);
    const newArr = [...lists];
    newArr.splice(index,0,addNew)
    console.log(newArr);
    setLists([...newArr]);
    
  };
  const handleEdit = (id: string) =>{
  
  };
  const handleDelete = (id: string) => {
    const newArr = lists.filter((item) => item.id !== id);
    setLists([...newArr]);
  };
  const handleAdd = () => {
    setLists((prevLists) => [
      ...prevLists,
      {
        id: uuidv4(),
        title: "...",
        content: "...",
        createAt: "...",
      },
    ]);
  };


  const [lists, setLists] = useState(storage);
  const listItems = lists.map((list) => (
    <li key={list.id}>
      <p>id:{list.id}</p>
      <h3 className={styles.title}>{list.title}</h3>
      <p>{list.content}</p>
      <a onClick={()=>handleEdit(list.id)}>Edit &gt;</a>
      <a onClick={() => handleDelete(list.id)} className={styles["delete-btn"]}>
        Delete
      </a>
      {/* <span className={styles.circle}></span> */}
      <span  onClick={()=>handleAddBetween(list.id)} className={styles.circle}>
          {/* &#43; */}
      </span>
      <span className={styles.line}></span>
      <span className={styles.date}>{list.createAt}</span>
    </li>
  ));


  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.heading}>Timeline</h3>
        <div className={styles.container}>
          <ul>{listItems}</ul>
        </div>
        <button onClick={handleAdd} className={styles.btn}>
          &#43;
        </button>
      </div>
    </>
  );
}
export default TimelineList;
