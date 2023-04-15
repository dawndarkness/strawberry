import React from "react";
import styles from "../styles/Scene.module.css";
import Tree1 from "./icons/Tree1";
import Tree2 from "./icons/Tree2";
import Tree3 from "./icons/Tree3";
import Tree4 from "./icons/Tree4";
import Tree5 from "./icons/Tree5";
import Tree6 from "./icons/Tree6";
import Tree7 from "./icons/Tree7";
import Tree8 from "./icons/Tree8";
import Tree9 from "./icons/Tree9";
import Tree10 from "./icons/Tree10";
import Tree11 from "./icons/Tree11";
import Tree12 from "./icons/Tree12";
import Tree13 from "./icons/Tree13";
import Tree14 from './icons/Tree14';

const Scene = () => {
  return (
    <div className={styles.scene_wrapper}>
      <div className={styles.scene_content}>
        <Tree1 size={70} />
        <Tree14 size={30} />
        <Tree2 />
        <Tree3 size={100} />
        <Tree4 />
        <Tree5 size={60} />
        <Tree6 />
        <Tree7 size={50} />
        <Tree8 />
        <Tree9 />
        <Tree10 size={70} />
        <Tree11 />
        <Tree12 />
        <Tree13 />
      </div>
    </div>
  );
};

export default Scene;
