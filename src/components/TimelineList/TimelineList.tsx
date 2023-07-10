import styles from "./TimelineList.module.css";
import { storage } from "../../fake.ts";
import {useState} from 'react';
function TimelineList() {
// const initLists = [...lists];
const [lists,setLists] = useState(storage);
  const listItems = lists.map((list) => (
    <li>
      <h3 className={styles.title}>{list.title}</h3>
      <p>{list.content}</p>
      <a href="#">Edit &gt;</a>
      <a className={styles['delete-btn']} href="#">Delete</a>
      <span className={styles.circle}></span>
      <span className={styles.line}></span>
      <span className={styles.date}>{list.createAt}</span>
    </li>
  ));
  const handleAdd = () =>{
    setLists([...lists,{
        title:'Front End Developer',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?',
        createAt:'January 2022'
    }]);
  }
  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.heading}>Timeline</h3>
        <div className={styles.container}>
          <ul>{listItems}</ul>
        </div>
        <button onClick={handleAdd} className={styles.btn} >&#43;</button>
      </div>
    </>
  );
}
export default TimelineList;
