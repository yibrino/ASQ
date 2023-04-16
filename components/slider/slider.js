import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (n) => {
    setSlideIndex((slideIndex + n + 3) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderImages}
        style={{ transform: `translateX(-${slideIndex * 33.33}%)` }}
      >
        <img src="/image1.jpg" alt="image1" className={styles.sliderImage} />
        <img src="/image2.jpg" alt="image2" className={styles.sliderImage} />
        <img src="/image3.jpg" alt="image3" className={styles.sliderImage} />
        <img src="/image4.jpg" alt="image3" className={styles.sliderImage} />
        <img src="/image5.jpg" alt="image3" className={styles.sliderImage} />
      </div>
      <div className={styles.sliderControls}>
        <button onClick={() => handleSlide(-1)}>&#10094;</button>
        <button onClick={() => handleSlide(1)}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
