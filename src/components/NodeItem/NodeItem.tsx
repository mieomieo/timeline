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
  editedTitle: string;
  setEditedTitle: (title: string) => void;
  editedContent: string;
  setEditedContent: (content: string) => void;
};

function NodeItem(props: NodeItemPropsType) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <li style={{ marginTop: `${props.offsetY}px` }}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={props.editedTitle}
              onChange={(e) => props.setEditedTitle(e.target.value)}
            />
            <textarea
              value={props.editedContent}
              onChange={(e) => props.setEditedContent(e.target.value)}
            ></textarea>
            <button
              onClick={() => {
                props.setTitle(props.editedTitle);
                props.setContent(props.editedContent);
                setIsEditing(false);
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <p>id:{props.id}</p>
            <h3 className={styles.title}>{props.title}</h3>
            <p>{props.content}</p>
            <a onClick={() => setIsEditing(true)}>Edit &gt;</a>
            <a
              onClick={() => props.handleDelete(props.id)}
              className={styles["delete-btn"]}
            >
              Delete
            </a>
            <span className={styles.circle}></span>
            <span className={styles.line}></span>
            <span className={styles.date}>Day: {props.createAt}</span>
          </div>
        )}
      </li>
    </>
  );
}

export default NodeItem;
