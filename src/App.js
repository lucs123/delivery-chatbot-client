import React,{Component} from 'react';
import './App.css';
import {Grid,withStyles} from '@material-ui/core';
import ResponsiveDrawer from './components/Drawer.js'
import Table from './components/Table.js'
import Footer from './components/Footer.js'
import socketIOClient from "socket.io-client";

//  for local
// const ENDPOINT = "localhost:5000";
const ENDPOINT = "/";
const socket = socketIOClient(ENDPOINT);

const styles = (theme) => ({
  root: {
    display: 'flex',
    height: 'calc(100% - 60px)',
    minHeight: '100vh',
    // overflow: 'hidden',
     position: 'relative',
 	paddingBottom: '100px'
  },
  table: {
    paddingTop: "68px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },

  })

class App extends Component {
	constructor(){
		super();
		this.state = {
			status: 'Todos',
			pedidos: [],
		};
	}
	componentDidMount() {
		fetch('/pedidos')
		.then(response=>(
			response.json()))
		.then(response=>{
					this.setState({pedidos: response});
		})
		socket.on("FromAPI", data => {
        	console.log(data);
        	let pedidos = this.state.pedidos;
			const newPedidos = pedidos.concat(data)
			this.setState({pedidos: newPedidos})
        	console.log('in cdd:',this.state.pedidos)	
		})
    	return () => socket.disconnect();
	}

	changePage = (id)=>{
		if(id !== this.state.status){
			this.setState({status: id})
		}
	}

	changeStatus = (rowData,status)=>{
		this.setState(prevState=>{
			const pedidos = prevState.pedidos.map(pedido=>{
			if(pedido.id === rowData.id){
				pedido.status = status;
				socket.emit('changeStatus',pedido)
				return pedido
			}
			else{
				return pedido
			}
			});
			return{
				pedidos,
			}
		})
	}

	remove = (rowData)=>{
		  let newPedidos = [...this.state.pedidos];
		  let index = newPedidos.indexOf(rowData)
		  console.log(index)
		  if (index !== -1) {
		    newPedidos.splice(index, 1);
		    this.setState({pedidos: newPedidos});
		    socket.emit('remove',rowData)
		  }
	}

	render () {
    	const { classes } = this.props;
		return (
		<div className={classes.root}>
		    <Grid container>
		      <Grid item xs={'auto'}>  
		        <ResponsiveDrawer status={this.status} changePage={this.changePage}/>
		      </Grid>
		      <div className={classes.table}>  
		        <Grid item xs={'auto'}>
		            <Table pedidos={this.state.pedidos} changeStatus={this.changeStatus} 
		            status={this.state.status} remove={this.remove}/>
		        </Grid>
		      </div>
		    </Grid>
		    <Footer/>
		</div>
		);
    }
}

export default withStyles(styles)(App);
