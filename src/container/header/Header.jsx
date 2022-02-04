import React from 'react';
import './header.css'
import { RiUser3Line, RiHeartLine, RiHandbagLine } from 'react-icons/ri'

const Header = () => (
    <div className='riachuelo__header'>
        <div className='riachuelo__header-links_logo'>
            <div className="riachuelo__header-links_containerA">
                
            </div>
            <div className='riachuelo__header-links_containerB'>
                <h1><a href="#">RIACHUELO</a></h1>
            </div>
            <div className="riachuelo__header-links_containerC">
                <p><a href="#home">Bem-vindo à Riachuelo <RiUser3Line size={25} />
                <RiHeartLine size={25}/>
                <RiHandbagLine size={25} /></a></p>
            </div>
        </div>
        <div className='riachuelo__header-input'>
            <input type="text" id="search" name="search" placeholder="O que você esta procurando?" />
        </div>
        <div className='riachuelo__header-links_navbar'>
            <p>NOVIDADES</p>
            <p>FEMININO</p>
            <p>MASCULINO</p>
            <p>INFANTIL</p>
            <p>MODA ÍNTIMA</p>
            <p>CALÇADOS</p>
            <p>ACESSÓRIOS E RELÓGIOS</p>
            <p>BELEZA E PERFUME</p>
            <p>CASA RIACHUELO</p>
            <p>ELETRÔNICOS</p>
            <p>PERSONAGENS</p>
            <p>OUTLET</p>
        </div>
    </div>
)

export default Header;