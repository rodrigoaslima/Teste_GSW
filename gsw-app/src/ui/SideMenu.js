import React from 'react';
import '../css/SideMenu.css';

const SideMenu = () =>{
    return(
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
					<div className="profile-usertitle-job">
						Developer
					</div>
				</div>
                </div>
                			
				
				
				
				<div className="profile-usermenu">
					<ul className="nav flex-sm-column">
						<li className="active">
							<a href="#">
							<i className="glyphicon glyphicon-home"></i>
							Dashbaord </a>
						</li>
						<li>
							<a href="#">
							<i className="glyphicon glyphicon-user"></i>
							Account Settings </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i className="glyphicon glyphicon-ok"></i>
							Tasks </a>
						</li>
						<li>
							<a href="#">
							<i className="glyphicon glyphicon-flag"></i>
							Help </a>
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