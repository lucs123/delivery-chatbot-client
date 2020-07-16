import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom';
import App from './App.js'
import Login from './components/Login'
import auth from './auth'

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

function Routes () {
		return(
      <div>
			<Switch>
				<PrivateRoute exact path='/' component={App}/>	
				<Route exact path='/login' component={Login}/>	
			</Switch>
      </div>
		)
}

export default Routes;	