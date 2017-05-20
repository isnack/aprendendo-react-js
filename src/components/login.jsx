    import React, {Component} from 'react';
    import axios from 'axios';

    class Login extends Component{
        constructor() {
        super()
        this.state ={
                        data:'',
                    };
        }
        login(form){
            var data={
                        usuario:form.user.value,
                        senha:form.password.value
                     }
            var th= this;


         axios
        .get('https://api.github.com/users/' + 'isnack')
        .then(response => th.setState({data: response.data.url}))
        .catch(err => console.log(err))
        }

        render(){
            return(
            <div>
               <form >
                <label for="usuario">Usuário</label>
                <input ref='user' type="text"/>
                <label for="Senha">Senha</label>
                <input ref='password' type="text"/>
                <button onClick={()=>this.login(this.refs)}>Entrar</button>
                </form>
                 <div>{this.state.data}</div>
                
            </div>
            )
        }

    }
    export default Login;