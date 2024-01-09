import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React, { Component } from "react";
import Slider from "react-slick";

const imagenes = [
  {
    id: "1",
    imag: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg",
  },

  {
    id: "2",
    imag: "https://cdn2.cocinadelirante.com/680x400/filters:format(jpg):quality(75)/sites/default/files/images/2023/08/recetas-de-hamburguesas-caseras.jpg",
  },
  {
    id: "3",
    imag: "https://fotos.perfil.com/2022/10/14/trim/1280/720/parrilla-1436284.jpg",
  },


];



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div id="test">
        <Slider {...settings}>
          {imagenes && imagenes.map((imagen) => (
            <div key={imagen.id}>
              <img className="object-cover h-full w-full overflow-hidden" src={imagen.imag} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}