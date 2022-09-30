import styled from "styled-components"
import 'animate.css'
import Logo from '../../assets/img/Logomeio.png'
import { useState, useEffect } from "react"
import { FaAlignJustify } from 'react-icons/fa'
import { PropsMenu } from "./layout.interface"
import SideMenu from "./sideMenu"
interface Props {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
    const [show, setShow] = useState<PropsMenu>({ show: false, timerShow: false })
    const { height, width } = window.screen
    const [menuType, setMenuType] = useState<boolean>(false)

    useEffect(() => {
        if (width < 572) {
            setMenuType(true)
        } else {
            setMenuType(false)
        }
    }, [])
    const handleShow = () => {
        setShow({ show: true, timerShow: false })
        setTimeout(() => {
            setShow({show: true , timerShow: true})
        }, 2000)
    }
    return (
        <Container>
            {show.show === true && (
                <SideMenu setShow={setShow} show={show.show} timerShow={show.timerShow} />
            )}

            {show.timerShow === false && (
                <>
                    <Header>
                        <div>
                            <img src={Logo} />
                        </div>
                        {menuType === false ? (
                            <>
                                <p>Quem Somos?</p>
                                <p>Contato</p>
                                <p>Serviços</p>
                            </>
                        ) : (
                            <>
                                <FaAlignJustifyStyled onClick={handleShow} />
                            </>
                        )}
                    </Header>
                    <Main>
                        {children}
                    </Main>

                </>
            )}


        </Container>
    )
}
const FaAlignJustifyStyled = styled(FaAlignJustify)`
    color: #fff;
    font-size: 1.5rem;
    
`
const Header = styled.header`
    display: flex;
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    padding-left: 30px;
    padding-right: 30px;
    p   {
        margin-left: 20px;
        cursor: pointer;
        margin-right: 50px;
        margin-top: 0;
        margin-bottom: 0;
        animation: backInDown; 
        animation-duration: 3s; 
        :hover {
            scale: 1.2;
            transition: 0.5s;
            text-shadow: 4px 4px 2px rgba(255,255,255,0.6);
        }
    }
    div {
        flex: 1;
        img {
            animation: backInDown; 
            animation-duration: 3s; 
            cursor: pointer;
            :hover {
            scale: 1.2;
            transition: 0.5s;
        }
            width: 50px;
        }
    }
`
const Main = styled.main`
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Footer = styled.footer`
`
const Container = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #212121, #1c1c1c, #181818, #131313, #0c0c0c, #080808, #040404, #000000, #000000, #000000, #000000, #000000);
`