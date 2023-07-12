import styles from "./TimelineList.module.css";
import { storage } from "../../fake.ts";
import { useState,MouseEventHandler,useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type EventItem = {
  title: string,
  content: string,
  offsetY: number,
  isCollapse: boolean
};

function TimelineList() {
  const listTmp:EventItem[] = []
  const [listEventItem, setListEventItem] = useState(listTmp);


  const timeLineRef = useRef(null);
  const[date,setDate]=useState<number | undefined>();
  const [lists, setLists] = useState(storage);
  const handleDelete = (id: string) => {
    const newArr = lists.filter((item) => item.id !== id);
    setLists([...newArr]);
  };

  const handleChooseTimeline: MouseEventHandler<HTMLDivElement> = (e) =>{
    const heightOfTimeLine = timeLineRef.current.getBoundingClientRect().height;
    console.log("heightOfTimeLine:",heightOfTimeLine);
    
    const logPercent = Math.floor((e.pageY-170)/heightOfTimeLine*100);
    console.log("value: ",`${logPercent} %`) ;
    const day = Math.floor(1095*logPercent/100);
    setDate(day);
    console.log("Day:",day);
    setLists((prevLists) => [
      ...prevLists,
      {
        id: uuidv4(),
        title: "..aaaa.",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?",
        createAt: "...",
      },
    ]);
  };

  const listItems = lists.map((list) => (
    <li key={list.id}>
      <p>id:{list.id}</p>
      <h3 className={styles.title}>{list.title}</h3>
      <p>{list.content}</p>
      <a >Edit &gt;</a>
      <a onClick={() => handleDelete(list.id)} className={styles["delete-btn"]}>
        Delete
      </a>
      <span  className={styles.circle}>
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
          <div ref={timeLineRef} onClick={ handleChooseTimeline} className={styles.timeline}>
            <div className={styles.circleBottom}></div>
            <div>{date}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TimelineList;
