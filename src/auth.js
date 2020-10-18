class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(username, password) {
        if (username === 'adam' && password === 'test')
            return this.authenticated = true;
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }

}

export default new Auth();