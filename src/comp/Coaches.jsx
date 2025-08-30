import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Coaches() {
  const [coaches, setCoaches] = useState([
    { id: 1, name: "Mostafa", img: "/coaches/mostafa.jpg", title: "Leader" ,link:"https://www.instagram.com/mustafa.saeid1?igsh=dmMxc2QxMjV2cnpj" },
    { id: 2, name: "Zima", img: "/coaches/zema.jpg", title: "Fitness manager",link:"https://www.instagram.com/c.zemaa?igsh=eXpoNTJvMHVlaGt4&utm_source=qr" },
    { id: 3, name: "Aimlia", img: "/coaches/aimlia.jpg", title: "Coach", link:"https://www.instagram.com/coach_amelia_abualyzid111?igsh=N3R6Z3M3NW1ldmt2" },
    { id: 4, name: "Haitham", img: "/coaches/haitham.jpg", title: "Coach", link:"https://www.instagram.com/m_haithamm?igsh=MW0yYmh6Z2NxODQxZA=="},
    { id: 5, name: "Saif", img: "/coaches/saif.jpg", title: "Coach", link:"https://www.instagram.com/coach.radwann?igsh=OHdjcmtsYWlmb3c0" },
    { id: 6, name: "Amr", img: "/coaches/amr.jpg", title: "Coach" , link:"https://www.instagram.com/amr_tamer_22/" },
    { id: 7, name: "Ali", img: "/coaches/ali.jpg", title: "Coach",link:"https://www.instagram.com/_aliiayman_?igsh=OHlyMjdlazB2cGZh" },
    { id: 8, name: "Bogy", img: "/coaches/bogy.jpg", title: "Coach", link:"https://www.instagram.com/abdo_boogie?igsh=d3poMmRka3luNnpq" },
  ]);

  // إعدادات السلايدر
  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="w-50%">
        {/* الوصف فوق السلايدر */}
        <p className='text-lg font-bold p-2'>
          Our coaches are here to support you in becoming stronger, healthier, and better every single day.
        </p>

        <div className="lg:px-14">
          <Slider className="pb-5 w-50%" {...settings}>
            {coaches.length > 0 ? (
              coaches.map((coache) => (
                // 🔹 هنا غيرنا الـ div إلى <a> عشان يبقى لينك قابل للضغط
                <a
                  key={coache.id}
                  href={coache.link}          // اللينك بتاع الكوتش
                  target="_blank"             // يفتح في تاب جديد
                  rel="noopener noreferrer"   // أمان ضد الـ phishing
                  className="w-full md:w-40 bg-black rounded-lg bg-opacity-70 text-blue-700 flex flex-col justify-center pt-2 gap-2"
                >
                  <div className="w-full flex flex-col-reverse md:flex-row bg-black justify-center">
                    <div className="w-full justify-center items-center bottom-0">
                      <img
                        className="rounded-lg p-2 mx-1 md:w-40"
                        src={coache.img}
                        alt={`Coach ${coache.name}`}
                      />
                    </div>
                    <div className="lg:p-6 lg:m-6 font-bold p-3 text-2xl justify-between items-center flex flex-row gap-4 text-center">
                      <i className="fa-solid fa-arrow-left text-blue-600"></i>
                      <div>
                        <h2 className="font-semibold text-pretty gymfont ">
                          {coache.name}
                        </h2>
                        <h3 className="font-semibold text-white text-sm mt-2">
                          {coache.title}
                        </h3>
                      </div>
                      <i className="fa-solid fa-arrow-right text-blue-600"></i>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              // 🔹 لودينج لو لسه مفيش داتا
              <i className="text-3xl text-blue-700 p-4 m-4 fa-solid fa-spinner fa-spin"></i>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}
