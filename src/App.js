import React,{Component} from 'react';
import './App.css';
import {Grid,withStyles} from '@material-ui/core';
import ResponsiveDrawer from './components/Drawer.js'
import Table from './components/Table.js'
import socketIOClient from "socket.io-client";

const ENDPOINT = "localhost:5000";
const socket = socketIOClient(ENDPOINT);

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  table: {
    paddingTop: "68px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
})

class App extends Component {
	state = {
		pedidos: [],
	}

	componentDidMount() {
		fetch('https://fierce-mountain-64147.herokuapp.com/pedidos')
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

	changePage = (e)=>{
		console.log('hello')
		console.log(e)		
	}

	changeStatus = (e)=>{
		console.log('hello')
		console.log(e)
	}

	render () {
    	const { classes } = this.props;
		return (
		<div className="root">
		    <Grid container>
		      <Grid item xs={'auto'}>  
		        <ResponsiveDrawer changePage={this.changePage}/>
		      </Grid>
		      <div className={classes.table}>  
		        <Grid item xs={'auto'}>
		            <Table pedidos={this.state.pedidos} changeStatus={this.changeStatus}/>
		        </Grid>
		      </div>
		    </Grid>
		</div>
		);
    }
}

export default withStyles(styles)(App);
