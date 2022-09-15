import { SideMenu } from "../assets/styles"
import { FaBackspace } from 'react-icons/fa'
import Logo from '../assets/imgs/Logobranca.png'

import React, { useState } from 'react'

interface Props {
    visible: boolean
}

export const SideMenuContainer: React.FC<Props> = ({ visible }) => {
    const [showVisible, setVisible] = useState<boolean>(visible)

    const handleVisible = () => {

    }
    return (
        <SideMenu>
            <nav>
                <div>
                    <div onClick={handleVisible}>
                        <img src={Logo} alt='logo empresa' />
                        <div>
                            <FaBackspace />
                        </div>
                    </div>
                </div>
                <p>Início</p>
                <p>Sobre</p>
                <p>Serviços</p>
                <p>Contato</p>

            </nav>
        </SideMenu>
    )
}