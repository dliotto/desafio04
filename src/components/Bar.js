import React, { Component } from 'react';
import logo from '../assets/facebook-1.png';

class Bar extends Component{
    
    render(){
        return(
            <>
            <header>
                <nav>
                    <img src={logo} />
                    <div>
                        <span>Meu perfil</span>
                        <i className="material-icons"></i>
                    </div>
                </nav>
            </header>
            </>
        );
    }
}

export default Bar;