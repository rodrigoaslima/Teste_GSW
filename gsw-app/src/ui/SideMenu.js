import React from 'react';
import '../css/SideMenu.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPowerOff, faClock, faUser, faProjectDiagram, faHome, faAddressCard, faFilter, faAngleRight, faCalendar, faEllipsisV, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

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
									Dashboard Admin
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

										<div className="dropdown-menu" aria-labelledby="dropdownMenuLink"></div>
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
				<div className="container col-md-9">
					<nav aria-label="breadcrumb">
  						<ol className="breadcrumb">
    						<li className="breadcrumb-item"><a href="#">Home</a></li>
    						<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
  						</ol>
					</nav>
            		<div className="profile-content">
			   			Listagem de Projetos
						<div className="dropdown show">
							<a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" >
							<FontAwesomeIcon icon={faFilter} style={{marginRight:'0.75rem'}} />
								Todos os registros no projeto
							</a>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuLink"></div>
						</div>

						<div className="card">
  							<div className="card-body">								
								<div className="row">
    								<div className="col-sm-1">
      									<div className="tanby rounded-circle">T</div>
    								</div>
    								<div className="col detalhes">
      									Tanby Papelaria <FontAwesomeIcon icon={faAngleRight}/> Desenvolvimento
										  <br/>
										Sistema para gestão de estoque
										<br/>
										<FontAwesomeIcon icon={faCalendar} style={{marginRight:'0.3rem'}} />Termina em 6 de julho
    								</div>
    								<div className="col-sm-3 detalhes">
									<FontAwesomeIcon icon={faClock} style={{marginRight:'0.1rem'}} />08:00 
									<FontAwesomeIcon icon={faEllipsisV} style={{marginRight:'1.3rem', marginLeft:'1.3rem'}} />
									<FontAwesomeIcon icon={faFlagCheckered} style={{marginRight:'0.1rem'}} />10:00
    								</div>
  								</div>							  
  							</div>
						</div>

						<div className="card">
  							<div className="card-body">								
								<div className="row">
    								<div className="col-sm-1">
      									<div className="embraer rounded-circle">E</div>
    								</div>
    								<div className="col detalhes">
      									Embraer <FontAwesomeIcon icon={faAngleRight}/> Manutenção
										  <br/>
										Sistema para gestão de estoque
										<br/>
										<FontAwesomeIcon icon={faCalendar} style={{marginRight:'0.3rem'}} />Termina em 6 de julho
    								</div>
    								<div className="col-sm-3 detalhes">
									<FontAwesomeIcon icon={faClock} style={{marginRight:'0.1rem'}} />08:00
									<FontAwesomeIcon icon={faEllipsisV} style={{marginRight:'1.3rem', marginLeft:'1.3rem'}} />
									<FontAwesomeIcon icon={faFlagCheckered} style={{marginRight:'0.1rem'}} />12:00
    								</div>
  								</div>							  
  							</div>
						</div>

						<div className="card">
  							<div className="card-body">								
								<div className="row">
    								<div className="col-sm-1">
      									<div className="petrobras rounded-circle">P</div>
    								</div>
    								<div className="col detalhes">
      									Petrobras <FontAwesomeIcon icon={faAngleRight}/> Manutenção
										  <br/>
										Sistema para gestão de estoque
										<br/>
										<FontAwesomeIcon icon={faCalendar} style={{marginRight:'0.3rem'}} />Termina em 6 de julho
    								</div>
    								<div className="col-sm-3 detalhes">
									<FontAwesomeIcon icon={faClock} style={{marginRight:'0.1rem'}} />08:00
									<FontAwesomeIcon icon={faEllipsisV} style={{marginRight:'1.3rem', marginLeft:'1.3rem'}} />
									<FontAwesomeIcon icon={faFlagCheckered} style={{marginRight:'0.1rem'}} />12:00
    								</div>
  								</div>							  
  							</div>
						</div>
            		</div>				
				</div>
			</div>
		</div>
    );
};

export default SideMenu;