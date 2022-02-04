import React from 'react';
import "./navbar.css";
import { RiWhatsappLine, RiBankCard2Line } from 'react-icons/ri';

// import { Container } from './styles';

const Navbar = () => (
      <div className="riachuelo__navbar">
        <div className="riachuelo__navbar-links">
          <div className="riachuelo__navbar-links_containerA">
            <p><a href="#">BAIXE O APP</a></p>
            <p><a href="#">CASA RIACHUELO</a></p>
            <p><a href="#">CARTER'S</a></p>
            <p><a href="#">JEANS</a></p>
            <p><a href="#">BÁSICOS</a></p>
          </div>
          <div className="riachuelo__navbar-links_containerB">
            <p><a href="#"><RiWhatsappLine size={16}/> COMPRE NO WHATSAPP</a></p>
            <p><a href="#">LISTA DE PRESENTES</a></p>
            <p><a href="#"><RiBankCard2Line size={16}/>CARTÃO RIACHUELO</a></p>
          </div>
        </div>
      </div>
    );

export default Navbar;