import React from 'react';
import '../css/SideMenu.css';
import '../icons/settings.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPowerOff, faClock, faUser, faProjectDiagram, faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const SideMenu = () =>{
    return (
        <div className="container">
    		<div className="row profile">
				<div className="col-md-3">
					<div className="profile-sidebar">
                		<div className="row">
                
							<div className="profile-userpic col" style={{textAlign:'end'}}>
								<img src="https://i1.wp.com/www.ultimatescience.org/wp-content/uploads/2017/04/5.jpg?fit=384%2C500" className="img-responsive" alt=""/>
							</div>
				
							<div className="profile-usertitle col">
								<div className="profile-usertitle-name">
									José Severino
								</div>
								<div className={'profile-usertitle-job'}>
									Developer
								</div>
							</div>
                		</div>
				
						<div className="profile-usermenu">
							<ul className="nav flex-sm-column">
								<li style={{paddingLeft:'0.75rem'}}>
									<a href="#">										
										<FontAwesomeIcon icon={faHome} style={{marginRight:'0.75rem'}} />Dashboard
									</a>
								</li>

								<li>
									<div className="dropdown show">
										<a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
											<FontAwesomeIcon icon={faAddressCard} style={{marginRight:'0.75rem'}} /> Cadastros
										</a>

										<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
											<a className="dropdown-item" href="#">Usuários</a>
											<a className="dropdown-item" href="#">Clientes</a>
										</div>
									</div>							
								</li>


								<li>
									<div className="dropdown show">
										<a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
											<FontAwesomeIcon icon={faProjectDiagram} style={{marginRight:'0.75rem'}} />Projetos
										</a>

										<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
											<a className="dropdown-item" href="#">Relátorios</a>
											<a className="dropdown-item" href="#">Registro</a>
										</div>
									</div>							
								</li>

								<li>
									<div className="dropdown show">
										<a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
											<FontAwesomeIcon icon={faUser} style={{marginRight:'0.75rem'}} />Meu perfil
										</a>

										<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
											<a className="dropdown-item" href="#">Trocar senha</a>
											<a className="dropdown-item" href="#">Editar perfil</a>
										</div>
									</div>							
								</li>

								<li style={{paddingLeft:'0.75rem'}}>
									<a href="#">									
										<FontAwesomeIcon icon={faClock} style={{marginRight:'0.75rem'}} />Ver registro de horas
									</a>
								</li>

								<li>
									<div className="dropdown show">
										<a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" >
											<FontAwesomeIcon icon={faCog} style={{marginRight:'0.75rem'}} />Configurações
										</a>

										<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
											<a className="dropdown-item" href="#">Trocar senha</a>
											<a className="dropdown-item" href="#">Editar perfil</a>
										</div>
									</div>							
								</li>

								<li style={{paddingLeft:'0.75rem'}}>
									<a href="#">									
										<FontAwesomeIcon icon={faPowerOff} style={{marginRight:'0.75rem'}}/>Sair do sistema
									</a>
								</li>
							</ul>
						</div>			
					</div>
				</div>
				<div className="col-md-9">
            		<div className="profile-content">
			   			Some user related content goes here...
            		</div>
				</div>
			</div>
		</div>
    );
};

export default SideMenu;