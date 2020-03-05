import React from 'react'
import { Card, ImageContainer, Image, InfoContainer } from "./Cards.styles";
import { Button } from '../../styles/Buttons';
import { Header, Paragraph } from '../../styles/Typography'

function CardImage() {
    return (
        <Card>
            <ImageContainer>
                <Image src="https://as1.ftcdn.net/jpg/02/80/36/98/500_F_280369835_dYBmXDWoLHQGj6Vl7kcN8DaM6AgoB1Sf.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Header>Shopping makes you happier!</Header>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis omnis nam nesciunt illo, pariatur eius, facere architecto ex velit ducimus libero sapiente nulla, et neque sit accusamus praesentium eaque.</Paragraph>
                <Button>Find out why</Button>
            </InfoContainer>
        </Card>
    )
}

export default CardImage

// const Card = styled.div`
//     max-width: 300px;
//     min-width:250px;
//     border-radius:6px;
//     box-shadow:0 1rem 2rem rgba(0,0,0,0.3);
//     // padding: 1.5rem;
//     transition : transform 0.09s ease-in;
//     &:hover {
//         transform : scale(1.05)
//     }
// `
// const ImageContainer = styled.div`
//     width:100%;
//     height:30%;
// `
// const Image = styled.img`
//  width:100%;
//  object-fit: cover;
//  object-position: center;
// `
// const InfoContainer = styled.div`
//     padding : 1rem;
// `
// const Header = styled.h4`
//     font-size:24px;
//     font-weight:600;
//     color: cornflowerblue;
//     margin:0;
//     padding:0;
// `
// const Paragraph = styled.p`
//     font-size:16px;
//     color : black;
//     margin-bottom:2rem;
//     letter-spacing : 1px;
//     color:gray;
// `
// const Button = styled.button`
//     border:none;
//     outline:none;
//     background: lightgreen;
//     color: white;
//     font-size:16px;
//     font-weight:600;
//     padding:0.75rem 1.5rem;
//     border-radius : 6px;
//     &:hover {
//         background: rgba(0,255,0,0.7);
//         cursor:pointer;
//     }

// `

