import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.littleSmilesEventWrapper}>
                <div className={styles.littleSmilesEvent}>Little Smiles Event</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.comingSoonParent}>
                  <div className={styles.comingSoon}>Coming Soon</div>
                  <div className={styles.wereCraftingSomethingContainer}>
                    <p className={styles.wereCraftingSomething}>We’re crafting something special!</p>
                    <p className={styles.wereCraftingSomething}>At Little Smiles Event, we create unique, personalised return gifts that make your celebrations unforgettable. Whether it’s a birthday, wedding, baby shower, or corporate event, our handcrafted gifts are designed to spread smiles and lasting memories.</p>
                  </div>
                </div>
                <div className={styles.instagramParent}>
                  <div className={styles.instagram}>Instagram</div>
                  <div className={styles.instagram}>Email</div>
                  <div className={styles.instagram}>Phone</div>
                </div>
              </div>
            </div>
          </div>
          <Image className={styles.image1Icon} width={2611.9} height={579} sizes="100vw" alt="" src="/image 1.png" />
        </div>
        
      </main>
    </div>
  );
}
