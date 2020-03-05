import React from 'react';
import { Card, InfoContainer } from './Cards.styles';
import { Button } from '../../styles/Buttons';
import { Header, Paragraph, Subheader } from '../../styles/Typography';



function CardNotification() {
    return (
        <Card style={{ maxWidth: "600px" }}>
            <InfoContainer className="border-bottom inverse">
                <Header>You were mentioned in one message!</Header>
                <Subheader>143 : Schoonmaken op stations</Subheader>
                <Paragraph>Dear Berin Aptula, </Paragraph>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ex necessitatibus reiciendis pariatur!Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
            </InfoContainer>
            <InfoContainer className="text-center">
                <Button className="button-pill">Ga naar the camping pagina</Button>
            </InfoContainer>
        </Card>
    )
}

export default CardNotification

// const Card = styled.div`
//     max-width: 600px;
//     border-radius:10px;
//     box-shadow:0 1rem 2rem rgba(0,0,0,0.3);
//     transition : transform 0.09s ease-in;
//     display:flex;
//     flex-direction:column;
//     // padding-top:3rem;
//     &:hover {
//     }
// `
// const Header = styled.h4`
//     font-size:24px;
//     font-weight:400;
//     color: gray;
//     margin:0;
//     padding: 0rem 3rem;
// `
// const Subheader = styled.p`
//     font-size:22px;
//     font-weight:600;
//     color: cornflowerblue;
//     padding: 0rem 3rem;
// `
// const Paragraph = styled.p`
//     font-size:16px;
//     color : black;
//     letter-spacing : 1px;
//     color:gray;
//     margin-top:0.5rem;
//     padding: 0rem 3rem;
//     &:not(:last-child){
//         margin-bottom:2rem;
//     }
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
//     width:50%;
//     transition: all 0.1s ease-in-out;
//     &:hover {
//         background: lightblue;
//         cursor:pointer;
//     }

// `
