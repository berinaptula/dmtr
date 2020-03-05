import React from 'react';
import { Card, InfoContainer, HeaderSmall, SubHeaderSmall, Contact } from './Cards.styles';
import { Header, Paragraph } from '../../styles/Typography';

function CardSeparated() {
    return (

        <Card style={{ maxWidth: "650px" }}>
            <InfoContainer className="border-bottom">
                <Header>Vragen over de oferte?</Header>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ex necessitatibus reiciendis pariatur!Lorem.</Paragraph>
            </InfoContainer>
            <InfoContainer>
                <HeaderSmall>Berin Aptula</HeaderSmall>
                <SubHeaderSmall>
                    Continuous Improvement Medewerker
               </SubHeaderSmall>
                <Contact href="https://google.com">romy@gmail.com</Contact>
                <Contact href="https://google.com">+31 6 200 199 ***</Contact>
            </InfoContainer>
        </Card>
    )
}

export default CardSeparated


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
// const HeaderSmall = styled.h4`
//     padding: 0rem 3rem;
//     font-weight:700;
//     font-size:18px;
//     margin-bottom:0.5rem;
// `
// const SubHeaderSmall = styled.p`
//     padding: 0rem 3rem;
//         font-size:16px;
//         color: grey;
//         margin-top:0;
// `
// const LineSeparate = styled.div`
//     margin:0;
//     border-top: 1px solid gray;
//     padding-bottom:3rem;
// `
// const Contact = styled.a`
//     color : cornflowerblue;
//     display:block;
//     padding: 0rem 3rem;
//     margin-bottom:0.4rem;
//     text-decoration : none;
//     &:hover {
//         color:lightblue;
//     }
// `