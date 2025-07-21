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
