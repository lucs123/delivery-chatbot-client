import {history} from './history'

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login() {
    this.authenticated = true;
    history.push('/')
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