import React from "react";

//STYLES
import { Container, Content, Table } from "./styles";

//LOCAL COMPONENTS
import Heading from "../Heading";

//UTILS
import { formatPrice } from "../../../utils/dataFormat";

const data = {
  id: 1,
  products: [
    {
      productId: 1,
      price: 9990,
      quantity: 1,
      product: {
        image:
          "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
        size: "M",
        name: "Camiseta de golfinho",
      },
    },
    {
      productId: 3,
      price: 2700,
      quantity: 2,
      product: {
        image:
          "https://mockup-api.teespring.com/v3/image/WGs_HCKH5pEL8Gr_yp4LstbXjkw/480/560.jpg",
        size: "P",
        name: "Vestido florido",
      },
    },
  ],
  productTotalPrice: 15399,
  shippingPrice: 2000,
  total: 17399,
  status: "Enviado",
};

export default function Details() {
  return (
    <Container>
      <Content>
        <Heading text="Detalhes do pedido" />
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((i) => {
              return (
                <tr key={i.productId}>
                  <td>
                    <img
                      src={i.product.image}
                      alt={`camiseta ${i.product.name}`}
                    />
                  </td>
                  <td>
                    {i.product.name} <br /> {i.product.size}
                  </td>
                  <td>{i.quantity}</td>
                  <td>{formatPrice(i.price)}</td>
                  <td>{formatPrice(i.quantity * i.price)}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Subtotal</td>
              <td>{formatPrice(data.productTotalPrice)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Valor do frete</td>
              <td>{formatPrice(data.shippingPrice)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{formatPrice(data.total)}</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
