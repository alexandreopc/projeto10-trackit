import Div from "./layout/Div"
import StyledLink from "./layout/StyledLink";
import logo from "../assets/imgs/logo.svg";

function Login() {
    return(
        <Div>
            <img src={logo} alt={logo} />
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <button>Entrar</button>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Div>
    );
}export default Login;
