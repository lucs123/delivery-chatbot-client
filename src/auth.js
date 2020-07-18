import {history} from './history'

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(email, pass) {
      return (async () => {
      const rawResponse = await fetch('/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: pass})
      });
      const content = await rawResponse.json();
      
      if(content.auth){
        localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, content.token)
        history.push('/')
      }
      return content
    })();
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
    history.push('/login')
  }

  isAuthenticated() {
      const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
      if(token){
      this.authenticated = (async () => {
      const rawResponse = await fetch('/login/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token:token})
      });
      const content = await rawResponse.json();

      return content.auth
    })();

    }
    return this.authenticated;
  }

}



export default new Auth();