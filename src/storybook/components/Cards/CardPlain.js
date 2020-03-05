import React from 'react';
import { Card, InfoContainer } from "./Cards.styles";
import { Button } from '../../styles/Buttons'
import { Header, Paragraph } from '../../styles/Typography'

function CardPlain() {
    return (
        <Card>
            <InfoContainer>
                <Header>New campaign : I bike</Header>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ex necessitatibus reiciendis pariatur!Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                <Button>Ga naar the camping pagina</Button>
            </InfoContainer>
        </Card>
    )
}

export default CardPlain

// const Card = styled.div`
//     max-width: 300px;
//     border-radius:6px;
//     box-shadow:0 1rem 2rem rgba(0,0,0,0.3);
//     padding: 1.5rem;
//     transition : transform 0.09s ease-in;
//     &:hover {
//         transform : scale(1.05)
//     }
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
//     margin-top:0.5rem;
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