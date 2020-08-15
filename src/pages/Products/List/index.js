import React from "react";

//LOCAL COMPONENTS
import Product from "../Product";

//STYLES
import { Container, Content, ProductList } from "./styles.js";

//CONTEXTS
import { useFilter } from "../../../store/useFilter";

//TEMP DATA
const products = [
  {
    id: 1,
    name: "Aaa",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
  {
    id: 2,
    name: "Aab",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
  {
    id: 3,
    name: "Abb",
    price: "R$49.99",
    image:
      "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
  },
];

export default function List() {
  const { filter } = useFilter();

  const filteredProducts = products
    .map((i) => {
      if (i.name.toLowerCase().includes(filter.toLowerCase())) {
        return i;
      }
      return null;
    })
    .filter(function (item) {
      return item != null;
    });

  return (
    <Container>
      <Content>
        <ProductList>
          {filteredProducts.map((i) => {
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
