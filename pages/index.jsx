import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
// import Tree1 from "../components/icons/tree1";
import Scene from "../components/Scene";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* <NFTGallery /> */}
        {/* <Tree1 size={70}/> */}
        <Scene />
      </main>
    </div>
  );
}
