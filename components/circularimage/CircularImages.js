import styles from "./CircularImages.module.css";

function CircularImages() {
  return (
    <div className={styles.container}>
      <div className={styles.circle1}>
        <img src="/image1.jpg" alt="Image 1" className={styles.image} />
      </div>
      <div className={styles.circle2}>
        <img src="/image2.jpg" alt="Image 2" className={styles.image} />
      </div>
      <div className={styles.circle3}>
        <img src="/image3.jpg" alt="Image 3" className={styles.image} />
      </div>
    </div>
  );
}

export default CircularImages;
