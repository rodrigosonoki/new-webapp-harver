import React from "react";

//LOCAL COMPONENTS
import Product from "../Product";

//STYLES
import { Container, Content, ProductList } from "./styles.js";

//TEMP DATA
const products = [
  {
    id: 1,
    name: "Camiseta de golfinho",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
  {
    id: 2,
    name: "Camiseta de golfinho",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
  {
    id: 3,
    name: "Camiseta de golfinho",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
  {
    id: 4,
    name: "Camiseta de golfinho",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
  {
    id: 5,
    name: "Camiseta de golfinho",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
  {
    id: 6,
    name: "Camiseta de golfinho",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
];

export default function List() {
  return (
    <Container>
      <Content>
        <ProductList>
          {products.map((i) => {
            return (
              <Product
                productName={i.name}
                productPrice={i.price}
                key={i.id}
                productImage={i.image}
              />
            );
          })}
        </ProductList>
      </Content>
    </Container>
  );
}
