import React from 'react';
import './carousel.css'
import { BsTruck, BsCreditCard2Back, BsPhone, BsArrowDownUp, BsWhatsapp } from 'react-icons/bs'

const carousel = () => (
    <div className='riachuelo__carousel'>
        <div className='riachuelo__carousel-links_containerA'>
            <p>FRETE GRATIS*para compras acima de R$249,90 *Veja condições</p>
        </div>
        <video source src={require('../../assets/02.mp4')} type="video/mp4" loop autoPlay />
        <div className='riachuelo__carousel-links_containerC'>
            <video source src={require('../../assets/03.mp4')} height={200} type="video/mp4" loop autoPlay />
        </div>
        <div className='riachuelo__carousel-links_containerD'>
            <p><BsPhone size={30}/>CLIQUE AQUI PARA EMITIR A FATURA DO CARTÃO E EMPRÉSTIMOS</p>
            <p><BsCreditCard2Back size={30}/>SOLICITE SEU EMPRÉSTIMO PESSOAL AQUI.</p>
            <p><BsTruck size={30}/>FRETE GRÁTIS* RETIRE EM LOJA</p>
            <p><BsArrowDownUp size={30}/>TROCAS E DEVOLUÇÕES, CLIQUE AQUI.</p>
            <p><BsWhatsapp size={30}/> FALE COM A HELÔ VIA WHATSAPP PELO 800-772-3555.</p>
        </div>
    </div>
)

export default carousel;