import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Add3.css";
import { Typography } from "@mui/material";
// Make sure to adjust the path based on your project structure

const Advertisement = () => {
  const testimonialData = [
    {
      name: "Copilet-Api",
      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    {
      name: "Commerce Checkout",
      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    {
      name: "integration test ",

      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    {
      name: "Commerce_checkout",
      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },

    {
      name: "Vulnariblily-scanner",

      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    {
      name: "Vulnariblily-scanner",
      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    {
      name: "Vulnariblily-scanner",
      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    {
      name: "Vulnariblily-scanner",

      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    {
      name: "Vulnariblily-scanner",
      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },

    {
      name: "Vulnariblily-scanner",

      disc: "25% Cost reuction",
      title: "Changed iops settings",
    },
    // Add more testimonial data as needed
  ];
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    draggable: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  const getOpacity = (index, currentSlide) => {
    const distance = Math.abs(index - currentSlide);

    // Set the index at which the third slide starts to be dark
    const darkSlideIndex = 2;

    // The farther away the slide, the lower the opacity
    const maxOpacity = 1; // Maximum opacity for the current slide
    const minOpacity = 0.2; // Minimum opacity for other slides

    // Linear interpolation for opacity
    if (index === darkSlideIndex) {
      return 0.7; // Dark for the third slide
    } else {
      return 1 - (distance / 5) * (1 - minOpacity / maxOpacity);
    }
  };

  return (
    <section>
      <div>
        <Slider {...sliderSettings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index}>
              <div
                className={`shadow-effect ${
                  index === sliderSettings.currentSlide ? "slick-current" : ""
                }`}
              >
                <p
                  className="para"
                  style={{
                    height: "3vh",
                    width: "100%",
                    borderRadius: "50px",
                    backgroundColor: "lightblue",
                    marginTop: "-5px",
                    fontSize: "17px",
                    opacity: getOpacity(index, sliderSettings.currentSlide),
                  }}
                >
                  <Typography variant="span" color="blue">
                    {testimonial.name}
                  </Typography>
                </p>
                <p
                  style={{
                    color: "white",
                    fontWeight: 900,
                    width: "100%",
                  }}
                >
                  {testimonial.disc}
                </p>
                <p
                  style={{
                    color: "white",
                    fontWeight: 800,
                    width: "100%",
                    opacity: "0.2",
                  }}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Advertisement;
