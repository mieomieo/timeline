import { storage } from "../../fake.ts";
import React, { useState } from "react";
import styles from "../TimelineList/TimelineList.module.css";

type NodeItemPropsType = {
  id: string;
  title: string;
  content: string;
  createAt: number;
  handleDelete: (id: string) => void;
  offsetY: number;
};

function NodeItem(props: NodeItemPropsType) {
  return (
    <>
      <li  style={{ marginTop: `${props.offsetY}px` }}>
        <div>
        <p>id:{props.id}</p>
        <h3 className={styles.title}>{props.title}</h3>
        <p>{props.content}</p>
        <a>Edit &gt;</a>
        <a
          onClick={() => props.handleDelete(props.id)}
          // onClick={() => handleDelete(props.id)}
          className={styles["delete-btn"]}
        >
          Delete
        </a>
        <span className={styles.circle}></span>
        <span className={styles.line}></span>
        <span className={styles.date}>Day: {props.createAt}</span>
        </div>
        
      </li>
    </>
  );
}

export default NodeItem;
