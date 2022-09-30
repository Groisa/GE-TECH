import React from 'react';
import styled from 'styled-components';
import { PropsMenu } from './layout.interface';
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/img/Logomeio.png'
import { GiSemiClosedEye } from 'react-icons/gi'
import { MdContactPage, MdMiscellaneousServices } from 'react-icons/md'
import { GrServices } from 'react-icons/gr'
interface Props {
    showStyled: boolean
}
const SideMenu: React.FC<PropsMenu> = ({ setShow, show, timerShow }) => {
    const handleClose = () => {
        if (setShow) {
            setShow({ show: false, timerShow: false });
        }

    }
    return (
        <Container id='teste' showStyled={show} className='sideMenu'>
            <HeaderTop>
                <div>
                    <h1>GE-TECH</h1>
                    <img src={Logo} />
                </div>
                <AiOutlineCloseStyled onClick={handleClose} />
            </HeaderTop>
            <Main>
                <div>
                    <GiSemiClosedEye />
                    <p>Quem Somos?</p>
                </div>
                <div>
                    <MdContactPage/>
                    <p>Contato</p>
                </div>
                <div>
                    <MdMiscellaneousServices color='#fff'/>
                    <p>Serviços</p>
                </div>
            </Main>
        </Container>
    );
}
const Main = styled.main`
    div {
        margin-top:30px ;
        display: flex;
        align-items: center;
        font-size: 35px;
        margin-left: 20px;
        color: #fff;
        p{
            color: #fff;
            margin:0;
            margin-left: 10px;
            padding: 0;
            font-size: 20px;
        }
    }
`
const HeaderTop = styled.header`
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
    align-items: center;
    div {
        display: flex;
        width: auto;
        align-items: center;
        img {
            margin-left: 5px; 
            width: 70px;
        }
    }
    h1 {
        background: linear-gradient(to right bottom, #212121, #343334, #484648, #5f5a5c, #766e70, #898082, #9c9395, #afa6a8, #c2bcbe, #d5d2d4, #e9e8ea, #ffffff);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 35px;
        font-weight: 700;
        text-align: center;
    }
`
const AiOutlineCloseStyled = styled(AiOutlineClose)`
    color: #fff;
    font-size: 25px;
`
const Container = styled.div<Props>`
    ${props => props.showStyled === true ? `
        width: 100%;
    `: `
        width: 0;
    `}
    animation: fadeInRight;
    animation-duration: 1.2s; 
    height: 100%;
    position: absolute;
    top: 0;
    color: #fff;
    z-index: 100;
    background-color: #212121;
`
export default SideMenu;