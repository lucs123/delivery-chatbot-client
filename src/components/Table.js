import MaterialTable from 'material-table'
import React from 'react';
        

function Table() {
    return (
  <MaterialTable
    
    columns={[
      { title: 'Nº do pedido', field: 'id' },
      { title: 'Pedido', field: 'pedido' },
      { title: 'Valor', field: 'valor' },
      { title: 'Forma de entrega', field: 'formaEntrega'},
      { title: 'Endereço', field: 'endereco'},
      { title: 'Status', field: 'status'}
    ]}
    data={[{ id: 1, pedido: "1 pizza de Mussarela", valor: "R$ 28,70", formaEntrega: "retirada", endereco: "Para entrega",
    status: "Na fila" }]}
    title="Todos os pedidos"

   
  />
    );
  };

export default Table;


