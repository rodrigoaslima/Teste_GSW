import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus, faUserTie } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginRight:'1.9375rem'}}>
            <a className="navbar-brand" href="#">Projeto Fácil</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faPlus} style={{marginRight:'0.3rem'}} />Criar Projeto </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faUserPlus} style={{marginRight:'0.3rem'}} />Cadastrar Usuário</a>
                    </li>                   
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabindex="-1"><FontAwesomeIcon icon={faUserTie} style={{marginRight:'0.3rem'}} />Cadastrar Cliente</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search" style={{borderRadius:'20px'}} ></input>                    
                </form>
            </div>
        </nav>

        
           
    );
};

export default NavBar;