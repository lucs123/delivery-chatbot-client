import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import auth from '../auth'

const styles = (theme)=>({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {
  
  state = {
    email:'',
    password:'',
    emailErr:{
      error:false,
      helperText:'',
    },
    passErr:{
      error:false,
      helperText:'',
    }
  }

  handleChange = (event)=>{
    const {name,value} = event.target
    this.setState({[name]:value})
  }

  handleSubmit = async (event)=>{
    event.preventDefault()
    auth.login(this.state.email, this.state.password)
    // await auth.login(this.state.email, this.state.password);
    // let err = auth.logError()
    // if(err){
    //   this.handleError()
    // }     
  }

  // handleError = () => {
  //   let errMessage;
  //   switch(auth.errCode){
  //     case('auth/wrong-password'):
  //       errMessage = 'Senha inválida'
  //       this.setState({
  //         passErr:{
  //           error:true,
  //           helperText:errMessage
  //         }
  //       })
  //       break
  //     case('auth/user-not-found'):
  //       errMessage = 'Email inválido'
  //       this.setState({
  //         emailErr:{
  //           error:true,
  //           helperText:errMessage
  //         }
  //       })
  //       break    
  //   }
  // }

  render(){
  const {classes} = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
          <TextField
            error={this.state.emailErr.error}
            helperText={this.state.emailErr.helperText}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            value= {this.state.email}
            onChange={this.handleChange}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            error={this.state.passErr.error}
            helperText={this.state.passErr.helperText}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
  }
}

export default withStyles(styles)(Login);