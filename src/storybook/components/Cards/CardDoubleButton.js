import React from 'react';
import { Card, InfoContainer } from './Cards.styles';
import { ButtonInverse, Button } from '../../styles/Buttons'
import { Header, Paragraph } from '../../styles/Typography';

function CardDoubleButton() {
    return (
        <Card style={{ maxWidth: "450px" }}>
            <InfoContainer className="border-bottom">
                <Header>You have a new offer!</Header>
                <Paragraph>Dear Berin Aptula, </Paragraph>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ex necessitatibus reiciendis pariatur!Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
            </InfoContainer>
            <InfoContainer className="text-center evenly-spaced">
                <Button>Accept Offer</Button>
                <ButtonInverse>No thanks</ButtonInverse>
            </InfoContainer>
        </Card>
    )
}

export default CardDoubleButton



// const Card = styled.div`
//     max-width: 600px;
//     border-radius:10px;
//     box-shadow:0 1rem 2rem rgba(0,0,0,0.3);
//     transition : transform 0.09s ease-in;
//     display:flex;
//     flex-direction:column;
//     padding-top:3rem;
//     &:hover {
//     }
// `
// const Header = styled.h4`
//     font-size:24px;
//     font-weight:400;
//     color: black;
//     margin:0;
//     margin-bottom:1rem;
//     padding: 0rem 3rem;
// `
// const Paragraph = styled.p`
//     font-size:16px;
//     color : black;
//     margin-bottom:2rem;
//     letter-spacing : 1px;
//     color:gray;
//     margin-top:0.5rem;
//     padding: 0rem 3rem;
// `
// const ButtonPill = styled.button`
//     text-align:center;
//     border:none;
//     outline:none;
//     background: cornflowerblue;
//     color: white;
//     font-size:16px;
//     font-weight:600;
//     padding:0.75rem 1.5rem;
//     border-radius : 25px;
//     width:30%;
//     transition: all 0.1s ease-in-out;
//     &:hover {
//         background: lightblue;
//         cursor:pointer;
//     }

// `
// const ButtonPillSecondary = styled.button`
//     text-align:center;
//     border:none;
//     outline:none;
//     background: white;
//     color: cornflowerblue;
//     font-size:16px;
//     font-weight:600;
//     padding:0.75rem 1.5rem;
//     border-radius : 25px;
//     width:30%;
//     transition: all 0.1s ease-in-out;
//     border:1px solid grey;
//     box-shadow: border-box;
//     &:hover {
//         background: cornflowerblue;
//         cursor:pointer;
//         color : white;
//         border:1px solid transparent;
//     }

// `
// const LineSeparate = styled.div`
//     padding:3rem 0;
//     border-top: 1px solid gray;
//     text-align:center;
//     display:flex;
//     justify-content:space-evenly;
// `