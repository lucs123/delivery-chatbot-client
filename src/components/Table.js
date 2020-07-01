import MaterialTable from 'material-table'
import React from 'react';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import DeleteIcon from '@material-ui/icons/Delete';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };


function Table(props) {
  let acoes = [
        {
          icon: TimelapseIcon,
          hidden: (props.status === 'Fazendo')? true:false,
          tooltip: 'Fazendo',
          onClick: (event, rowData) => {
            props.changeStatus(rowData,'Fazendo')
          }
        },
        {
          icon: Check,
          hidden: (props.status === 'Finalizado')? true:false,
          tooltip: ((props.status === 'Aguardando retirada')||(props.status === 'Para entrega'))?'Finalizado':'Pronto',
          onClick: (event, rowData) => {
            if((props.status === 'Aguardando retirada')||(props.status === 'Para entrega')){
              props.changeStatus(rowData,'Finalizado');
           }
           else if(rowData.formaentrega === 'retirada'){
            props.changeStatus(rowData,'Aguardando retirada');  
           }
           else if(rowData.formaentrega === 'entrega'){
            props.changeStatus(rowData,'Para entrega');  
          }
        }
      }
  ]  

  let acoesDel = [
        {
          icon: TimelapseIcon,
          hidden: (props.status === 'Fazendo')? true:false,
          tooltip: 'Fazendo',
          onClick: (event, rowData) => {
            props.changeStatus(rowData,'Fazendo')
          }
        },
        {
          icon: MotorcycleIcon,
          hidden: (props.status === 'Para entrega')? true:false,
          tooltip: 'Para entrega',
          onClick: (event, rowData) => {
            props.changeStatus(rowData,'Para entrega')
          }
        },
        {
          icon: Check,
          hidden: (props.status === 'Finalizado')? true:false,
          tooltip: 'Finalizado',
          onClick: (event, rowData) => {
            props.changeStatus(rowData,'Finalizado');
          },
        },
        
        {
          tooltip: 'Remover pedido',
          icon: DeleteIcon,
          onClick:(event, rowData) => {
            console.log(rowData)
            props.remove(rowData);
          }
        }
  ]  

    return (
  <MaterialTable
    icons={tableIcons}
    columns={[
      { title: 'Nº do pedido', field: 'id', defaultSort:'desc', width: 100},
      { title: 'Pedido', field: 'pedido', width:190 },
      { title: 'Valor', field: 'valor' , width:100},
      { title: 'Forma de entrega', field: 'formaentrega', width: 150},
      { title: 'Endereço', field: 'endereco', width:190},
      { title: 'Status', field: 'status', width:110, 
       hidden:(props.status==='Todos')?false:true}
    ]}
    
    data={(props.status ==='Todos')?props.pedidos:
    props.pedidos.filter(pedido=>(pedido.status === props.status))}
    
    title={props.status}
    
    options={{
      filterCellStyle: {display:'none'},
      filtering: true,
      headerStyle: {
        fontWeight: 'bold'
      },
      addRowPosition: 'first',
      columnsButton: 'true',
      exportButton: 'true',
      paging: false,
      draggable: false,
      actionsColumnIndex: -1,
      // selection: (props.status === 'Finalizado')?true:false, 
      actionsCellStyle: {width:40}     
    }}

    actions={(props.status !== 'Finalizado')?acoes : acoesDel}

    localization={{
        header:{
          actions:'Mudar status'
        },
        body: {
          emptyDataSourceMessage: 'Nenhum registro para exibir'
        },
        toolbar: {
          searchTooltip: 'Pesquisar',
          searchPlaceholder: 'Pesquisar',
          showColumnsTitle: 'Mostrar colunas',
          showColumnsAriaLabel: 'Mostrar colunas',
          addRemoveColumns: 'Adiciona ou remove colunas',
          exportTitle: 'Baixar',
          exportName: 'Baixar planilha',
        },
    }}
  />
    );
  };


export default Table;


