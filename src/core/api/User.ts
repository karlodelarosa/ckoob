export default class User {
    username: string = ''
    password: string = ''

    sampleUsername = 'master'
    samplePassword = 'password'

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    getUsername() {
        if (this.username === '') {
            throw new Error('Username field has no data')
        }
        return this.username;
    }

    getPassword() {
        if (this.password === '') {
            throw new Error('Password field has no data')
        }
        return this.password;
    }

    authenticate() {
        return this.username === this.sampleUsername && this.password === this.samplePassword
    }
}