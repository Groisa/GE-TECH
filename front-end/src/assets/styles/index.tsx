import styled from 'styled-components'
import ImageTop from '../imgs/PrimaryWallpaper.jpg'


export const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const HeaderContainer = styled.header`
     p {
        margin: 0;
        padding: 0;
     }
     h1 {
        margin: 0;
        padding: 0;
     }
`
export const DatacontainerHeader = styled.div`
    width: 100%;
    height: 60px;
    background-color:RGBA(0,0,20,0.3);
    border-radius: 0 0 15px 15px;
    position: fixed;
    box-shadow: 7px 2px 9px 0px rgba(255,255,255,0.3);
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        :hover {
            cursor: pointer;
            scale: 1.2;
            text-shadow: 4px 4px 2px rgba(255,255,255, 0.6);
            transition: 1.5s;
        }
    }
    img {
        width: 12rem;
        cursor: pointer;
        :hover {
            scale: 1.1;
            opacity: 90%;
            transition: 1.5s;
        }
    }
`
export const ImageSource = styled.div`
    background-image: url(${ImageTop});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    background-color: #121283;
    opacity: 30%;
    height: 100vh;
`