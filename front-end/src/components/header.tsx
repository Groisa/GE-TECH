import React from 'react'
import { DatacontainerHeader, HeaderContainer, ImageSource } from '../assets/styles'

import Logo from '../assets/imgs/Logobranca.png'

export const HeaderComponent: React.FC = () => {
    return (
        <HeaderContainer>
            <div>
                <ImageSource />
            </div>
            <DatacontainerHeader>
                <p>Início</p>
                <p>Sobre</p>

                <img src={Logo} alt='logo da empresa'/>

                <p>Serviços</p>
                <p>Contato</p>
            </DatacontainerHeader>
        </HeaderContainer>
    )
}