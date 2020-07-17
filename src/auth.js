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

      console.log(content)
    })();
    // this.authenticated = true;
    // history.push('/')
  }

  logout() {
    this.authenticated = false;
    history.push('/login')
  }

  isAuthenticated() {
    return this.authenticated;
  }
}



export default new Auth();