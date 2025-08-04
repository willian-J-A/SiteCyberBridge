import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ClientCarousel.module.css";
import { getLogos } from "../../utils/helpers";

// Importa dinamicamente as imagens da pasta logos
const logos = getLogos();

export default function ClientCarousel() {
  const canLoop = logos.length > 2; // Permite loop apenas se houver mais de 2 logos

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides
        navigation
        loop={canLoop}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        style={{ width: "100%", maxWidth: 600 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          900: { slidesPerView: 3 },
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.src}
                alt={`Logo ${idx + 1}`}
                className={styles.logo}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
