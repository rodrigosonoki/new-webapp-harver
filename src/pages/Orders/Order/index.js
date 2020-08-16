import React, { useEffect } from "react";

//STYLES
import { Container, Content, Table } from "./styles";

//CONTEXT
import { useFilter } from "../../../store/useFilter";

const orders = [
  {
    id: 1,
    date: "2 Ago",
    total: "R$149.00",
    status: "Aprovado",
  },
  {
    id: 2,
    date: "27 Fev",
    total: "R$99.00",
    status: "Negado",
  },
  {
    id: 3,
    date: "03 Ago",
    total: "R$259.00",
    status: "Aprovado",
  },
  {
    id: 4,
    date: "25 Fev",
    total: "R$49.00",
    status: "Aprovado",
  },
];

export default function Order() {
  const { filter, setFilter } = useFilter();

  //RESET STATE WHEN MOUNTING COMPONENT
  useEffect(() => {
    const resetState = () => {
      setFilter("");
    };
    resetState();
  }, [setFilter]);

  const filteredOrders = orders
    .map((i) => {
      if (i.id.toString().includes(filter)) {
        return i;
      } else if (i.total.toLowerCase().includes(filter.toLowerCase())) {
        return i;
      } else if (i.status.toLowerCase().includes(filter.toLowerCase())) {
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
        <Table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Data</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.date}</td>
                  <td>{i.total}</td>
                  <td>{i.status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
