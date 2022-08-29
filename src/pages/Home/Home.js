import { Typography } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";
import Page from "material-ui-shell/lib/containers/Page";
import React from "react";
import { useIntl } from "react-intl";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import banner from "../../assets/images/banner_logo.svg";
import background from "../../assets/images/background1.svg";
import AliceCarousel from "react-alice-carousel";
import eye1 from "../../assets/images/eyes-03.svg";
import eye2 from "../../assets/images/eyes-04.svg";
import eye3 from "../../assets/images/eyes-05.svg";
import eye4 from "../../assets/images/eyes-06.svg";
import eye5 from "../../assets/images/eyes-07.svg";

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

const HomePage = () => {
  const intl = useIntl();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <img src={eye1} alt="jpg" />
    </div>,
    <div className="item" data-value="2">
      <img src={eye2} alt="jpg" />
    </div>,
    <div className="item" data-value="3">
      <img src={eye3} alt="jpg" />
    </div>,
    <div className="item" data-value="4">
      <img src={eye4} alt="jpg" />
    </div>,
    <div className="item" data-value="5">
      <img src={eye5} alt="jpg" />
    </div>,
  ];

  // const itemData = [
  //   {
  //     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  //     title: "Breakfast",
  //     rows: 2,
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  //     title: "Burger",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  //     title: "Camera",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  //     title: "Coffee",
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  //     title: "Hats",
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  //     title: "Honey",
  //     author: "@arwinneil",
  //     rows: 2,
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  //     title: "Basketball",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  //     title: "Fern",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  //     title: "Mushrooms",
  //     rows: 2,
  //     cols: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //     title: "Tomato basil",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //     title: "Sea star",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //     title: "Bike",
  //     cols: 2,
  //   },
  // ];

  return (
    <Page pageTitle={intl.formatMessage({ id: "home" })}>
      <div>
        <img
          src={background}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: -1,
          }}
          alt="cover"
        />
      </div>
      <img src={banner} alt="logo" style={{ margin: "0 32%" }} />

      <AliceCarousel
        style={{ width: "100%", height: "50%" }}
        mouseTracking
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />

      {/* <ImageList
        sx={{ margin: "0 32%" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </Page>
  );
};
export default HomePage;
