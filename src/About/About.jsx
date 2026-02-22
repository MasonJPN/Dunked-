import { useEffect, useState } from "react";
import Bulls from "../assets/Bulls.png";
import SneakersCollection from "../assets/SneakersCollection.png";
import Skyline from "../assets/Skyline.png"
import "./About.css";

export default function About() {
  const images = [Bulls, SneakersCollection, Skyline];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h1>About DUNKED</h1>
          <p>
            Growing up in Chicago, the Chicago Bulls and Michael Jordan were
            always a part of my life. That influence sparked my love for
            sneakers, jerseys, and sports memorabilia. DUNKED is a personal
            project where I combine those interests with web development,
            using this space to showcase my skills while celebrating the
            culture that shaped me.
          </p>
        </div>

        <div className="about-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="sports inspiration"
              className={`slide ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
