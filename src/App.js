import React from 'react';
import './App.css';
import {Grid,makeStyles,Typography} from '@material-ui/core';
import ResponsiveDrawer from './components/Drawer.js'
import Table from './components/Table.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  table: {
    paddingTop: "68px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
})
)

function App() {
  const classes = useStyles();
  return (
    <div className="root">
        <Grid container>
          <Grid item xs={'auto'}>  
            <ResponsiveDrawer/>
          </Grid>
          <div className={classes.table}>  
            <Grid item xs={'auto'}>
                <Table/>
            </Grid>
          </div>
        </Grid>
    </div>
  );
}

export default App;
