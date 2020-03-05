import styled from 'styled-components'

export const Card = styled.div`
    max-width: 300px;
    border-radius:6px;
    box-shadow:0 1rem 2rem rgba(0,0,0,0.3);
    transition : transform 0.09s ease-in;
    &:hover {
        transform : scale(1.05)
    }
`
export const ImageContainer = styled.div`
    width:100%;
    height:30%;
`
export const Image = styled.img`
    width:100%;
    object-fit: cover;
    object-position: center;
`
export const InfoContainer = styled.div`
    padding : 1.5rem;
`

export const CardTopImage = styled.div`
    padding-top:60px;
    max-width: 350px;
    min-width:250px;
    border-radius:6px;
    box-shadow:0 1rem 1rem rgba(0,0,0,0.3);
    transition : all 0.09s ease-in;
    position: relative;
    background: linear-gradient(to bottom right,cornflowerblue,lightblue);
    &:hover {
        box-shadow:0 1rem 1.5rem rgba(0,0,0,0.3);
    }
`
export const ImageCircle = styled.img`
    width: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    height: 100px;
    position: absolute;
    top: -50px;
    left:50px;
    border:5px solid white;
    box-sizing : border-box;
`
export const Quote = styled.p`
    font-size:19px;
    color : white;
    margin-bottom:2rem;
    letter-spacing : 1px;
`
export const QuoteIcon = styled.h3`
    font-weight: 300;
    position: relative;
    &::before {
        content: '"';
        font-family: icomoon;
        position: absolute;
        top: -100px;
        font-size: 16rem;
        color: hsla(0,0%,100%,.1);
    }
    
`
export const Author = styled.p`
    font-size:16px;
    color:white;
    width:70%;
`
export const CardDate = styled.span`
    color : lightgreen;
    font-weight:900;
    text-transform: uppercase;
    font-size:15px;
`
export const HeaderSmall = styled.h4`
    font-weight:700;
    font-size:18px;
    margin-bottom:0.5rem;
`
export const SubHeaderSmall = styled.p`
        font-size:16px;
        color: grey;
        margin-top:0;
`
export const Contact = styled.a`
    color : cornflowerblue;
    display:block;
    margin-bottom:0.4rem;
    text-decoration : none;
    &:hover {
        color:lightblue;
    }
`

export const LineSeparate = styled.div`
    margin:0;
    border-top: 1px solid gray;
    padding:1rem 0;
`