import React from "react";

//LOCAL COMPONENTS
import Heading from "../Heading";

//STYLES
import { Container, Content, ImageList } from "./styles";

const photos = [
  {
    url:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
    alt: "dolphin mask",
    index: 1,
  },
  {
    url:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
    alt: "dolphin mask",
    index: 2,
  },
];

export default function Description() {
  return (
    <Container>
      <Content>
        <Heading text="Imagens do seu produto" />
        <ImageList>
          {photos.map((i) => {
            return <img src={i.url} alt={i.alt} key={i.index} />;
          })}
        </ImageList>
      </Content>
    </Container>
  );
}
