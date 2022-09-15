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
    nav {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
            div {
                display: none;
            }
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
            @media(max-width: 572px){
                p   {
                    display: none;
                }
                div {
                    display: block;
                    font-size: 23px;
                    padding: 4px;
                    :active {
                        background-color: rgba(255,255,255, 0.2) ;
                        border-radius: 5px;
                    }
                }
                img {
                    width: 11rem;
                }
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
export const SideMenu = styled.div`
    height: 100vh;
    background-color: RGBA(0,0,20,1);
    width: 100vw;
    position: absolute;
    top: 0;
    nav {
        div {
                div {
                    div {
                        cursor: pointer;
                        font-size: 32px;
                        :active {
                                background-color: rgba(255,255,255, 0.2) ;
                                border-radius: 5px;
                            }  
                        flex: 0;
                    }
                    img {
                            width: 11rem;
                            height: 3rem;
                        }
                    width: 100%;
                    align-items: center;
                    height: 70px;
                    display: flex;
                    justify-content: space-evenly;
                    
                }
            }
    }
`