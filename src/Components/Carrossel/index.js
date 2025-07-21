import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Todas_imagens from "./Images";
import { EffectCards } from "swiper/modules";

function Carrossel() {
  return (
    <div className="container">
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        loop="true"
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: 1,
          perSlideOffset: 4,
        }}
      >
        {/* <SwiperSlide className="sla">
          <img
            src={"/IMG-20250721-WA0125.jpg"}
            alt={`Imagem test3`}
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide className="sla">
          <img
            src={"/IMG-20250721-WA0126.jpg"}
            alt={`Imagem test23`}
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide className="sla">
          <img
            src={"/IMG-20250721-WA0012.jpg"}
            alt={`Imagem test2`}
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide className="sla">
          <img
            src={"/IMG-20250721-WA0120.jpg"}
            alt={`Imagem test1`}
            className="img"
          />
        </SwiperSlide> */}

        {Todas_imagens.map((item) => (
          <SwiperSlide className="sla" key={item.id}>
            <img src={item.image} alt={`Imagem ${item.id}`} className="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Carrossel;
