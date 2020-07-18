import {history} from './history'

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(email, pass) {
        (async () => {
      const rawResponse = await fetch('/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: pass})
      });
      const content = await rawResponse.json();
      // console.log(rawResponse.headers.json())
      console.log(content.token)

      if(content.auth){
        localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, content.token)
      }
    })();
    // this.authenticated = true;
    // history.push('/')
  }

  logout() {
    this.authenticated = false;
    history.push('/login')
  }

  async isAuthenticated() {
      const token = await localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
      if(token){
        console.log(token)

      const rawResponse = await fetch('/login/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: token})
      });
      const content = await rawResponse.json();
      console.log(content)

      // if(content.auth){
      //   localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, content.token)
      // }

    }
    return this.authenticated;
  }
}



export default new Auth();