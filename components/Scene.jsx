import React from "react";
import styles from "../styles/Scene.module.css";
import Tree1 from "./icons/Tree1";
import Tree14 from './icons/Tree14';

const Scene = () => {
  return (
    <div className={styles.scene_wrapper}>
      <div className={styles.scene_content}>
        <Tree1 size={70} />
        <Tree14 size={30} />
      </div>
    </div>
  );
};

export default Scene;
