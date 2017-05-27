    import React, {
        Component
    }
    from 'react';
    import axios from 'axios';

    class Login extends Component {
        constructor() {
            super()
            this.state = {
                data: '',
            };
        }
        login(e, form) {

            var usuario = {
                usuario: form.user.value,
                senha: form.password.value
            }
           


            axios
                .post('http://localhost:3004/api/authentication',usuario)
                .then(response => this.setState({
                    data: response.data
                }))
                .catch(err => console.log(err))
            e.preventDefault();
        }

        render() {
            return ( < div >
                < form >
                < label for = "usuario" > Usuário < /label> < input ref = 'user'type = "text" / >
                < label for = "Senha" > Senha < /label> < input ref = 'password'type = "text" / >
                < button onClick = {(e) => this.login(e, this.refs)} > Entrar < /button>
                < /form>
                < div > {this.state.data.message} < /div>

                < /div>

            )
        }

    }
    export default Login;