import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App.js'


let auth = true

function PrivateRoute({component:Component, ...rest}) {
	return(
			<Route {...rest} render={(props)=>(
				(auth === true)
				?<Component {...props}/> 
				:<Redirect to={{pathname:'/auth', state: { from:props.location}} }/>
				)}
			/>
		)
}

function Routes() {
	return(
	<BrowserRouter>
		<Switch>
			<PrivateRoute exact path='/' component={App}/>	
			<Route path='/auth' component={()=>(<h1>Login</h1>)}/>	
		</Switch>
	</BrowserRouter>	
)}

export default Routes;	