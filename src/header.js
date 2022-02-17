import React from "react"
import logotads from "./img/logotads.png"
import {Link} from "react-router-dom"
import './App.css';


const header = () => {
    return(
        <section>
            <div className="topo">
                <span href="https://sigaa.ufrn.br" className="badge rounded-pill bg-secondary">SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas</span>
            </div>
            <div className="geral">
                <div className="flex">
                <div>
                <figure>
                <img src={logotads} width="250" height="150" alt="TADS-UFRN"></img>
                </figure>
            </div>
                <div>
                    <h2 className="font"><br/>Curso de Análise e Desenvolvimento de Sistemas</h2>
                    <p className="font">Universidade Federal do Rio Grande do Norte - Escola Agrícola de Jundiaí</p>
                </div>
                </div>
                <nav>
                    <ul >
                        <UfrnPath/>
                        <ApiPath/>
                        <PpPath/>
                        <NoticiasPath/>
                        <CalendarioPath/>
                        <ContatoPath/>
                        
                    </ul>
                </nav>
            </div>
        </section>
    );
}
const CalendarioPath = () => {
	return (
			 <li >
                   <Link to={"/calendario"}><button type="button" class="btn btn-primary">Calendário</button></Link>
            </li>
	)
};
const ApiPath = () => {
	return (
			 <li >
                   <Link to={"/api"}><button type="button" class="btn btn-primary">Api</button></Link>
            </li>
	)
};
const ContatoPath = () => {
	return (
			  <li >
                  <Link to={"/contato"}><button type="button" class="btn btn-primary">Contato</button></Link>
            </li>
	)
};
const UfrnPath = () => {
	return (
			  <li>
                <Link to={"/ufrn"}><button type="button" class="btn btn-primary">Apresentação</button></Link>
            </li>
	)
};
const PpPath = () => {
	return (
			<li >
                <Link to={"/pp"}><button type="button" class="btn btn-primary">Projeto pedagógico</button></Link>
            </li>
	)
};
const NoticiasPath = () => {
	return (
			 <li >
                <Link to={"/noticias"}><button type="button" class="btn btn-primary">Notícias</button></Link>
            </li>
	)
};
export default header;