import React, { useState } from 'react'
import { DatacontainerHeader, HeaderContainer, ImageSource } from '../assets/styles'

import Logo from '../assets/imgs/Logobranca.png'

import { FaAlignLeft } from 'react-icons/fa'
import { SideMenuContainer } from './SideMenuContainer'

export const HeaderComponent: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const handleVisible = () => {
        setVisible(true)
    }
    return (
        <>
            <HeaderContainer>
                <div>
                    <ImageSource />
                </div>
                <DatacontainerHeader>
                    <nav>
                        <div onClick={handleVisible}>
                            <FaAlignLeft />
                        </div>
                        <p>Início</p>
                        <p>Sobre</p>

                        <img src={Logo} alt='logo da empresa' />

                        <p>Serviços</p>
                        <p>Contato</p>
                    </nav>
                </DatacontainerHeader>
            </HeaderContainer>
            <SideMenuContainer visible={visible}/>
        </>
    )
}