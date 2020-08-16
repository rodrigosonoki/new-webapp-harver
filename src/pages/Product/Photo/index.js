import React from "react";

//LOCAL COMPONENTS
import Heading from "../Heading";

//STYLES
import { Container, Content, ImageList } from "./styles";

const photos = [
  "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
];

export default function Description() {
  return (
    <Container>
      <Content>
        <Heading text="Imagens do seu produto" />
        <ImageList>
          {photos.map((i, index) => {
            return <img src={i} key="index" />;
          })}
        </ImageList>
      </Content>
    </Container>
  );
}
