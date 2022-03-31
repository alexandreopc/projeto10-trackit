import Div from "./layout/Div";
import StyledLink from "./layout/StyledLink";
import logo from "../assets/imgs/logo.svg";

function Cadastro(){
    return(
        <Div>
            <img src={logo} alt={logo} />
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <input type="text" placeholder="nome"/>
            <input type="text" placeholder="foto"/>
            <button>Cadastrar</button>
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Div>
    );
}export default Cadastro;