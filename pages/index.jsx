import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import Tree1 from "../components/icons/tree1";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NFTGallery />
        <Tree1 size={70}/>
      </main>
    </div>
  );
}
