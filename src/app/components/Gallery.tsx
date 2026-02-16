import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/db22332280405c815414172e4eb9c942cff1c695.png";
import img2 from "../../assets/04a1052e0d92f3775a03a5e89352cc0552db3822.png";
import img3 from "../../assets/7d10bbe23cada0689e2fa4921072d327cb3965e6.png";
import img4 from "../../assets/ced14f6f0c44cb16fbbf8249bed97c571d55b4fe.png";

const images = [
  { src: img1, alt: "Corporate Exercise Books" },
  { src: img2, alt: "Stationery Shelves" },
  { src: img3, alt: "Quality Pens" },
  { src: img4, alt: "Office Supplies" },
];

export function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#030213]">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality stationeries and branding
            materials produced with precision and care.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-[300px] group relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    {/* <span className="text-white font-medium px-6 py-2 border-2 border-white rounded-full">
                      View Details
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
