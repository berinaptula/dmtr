import React from 'react';
import { Card, InfoContainer } from "./Cards.styles";
import { Button, ButtonInverse } from '../../styles/Buttons';
import { FormWrapper, Label, Input, Checkbox, CheckboxLabel } from '../../styles/Inputs'
import { Header, Paragraph } from '../../styles/Typography';



function CardSubscribeForm() {
    return (
        <Card style={{ maxWidth: "400px" }}>
            <InfoContainer className="border-bottom">
                <Header>Vragen over de oferte?</Header>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ex necessitatibus reiciendis pariatur!Lorem.</Paragraph>
            </InfoContainer>
            <FormWrapper>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter your name"></Input>
                <Label>Email</Label>
                <Input type="text" placeholder="Enter your email"></Input>
                <CheckboxLabel name="checkbox"><Checkbox name="checkbox" type="checkbox"></Checkbox>I agree with the following terms.</CheckboxLabel>
                <div className="evenly-spaced m-top-md">
                    <Button>Accorde offerte</Button>
                    <ButtonInverse>Afwijzen</ButtonInverse>
                </div>
            </FormWrapper>
        </Card>
    )
}

export default CardSubscribeForm

// const Card = styled.div`
//     max-width: 400px;
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
// const LineSeparate = styled.div`
//     margin:0;
//     border-top: 1px solid gray;
//     padding:1rem 0;
// `
// const FormWrapper = styled.div`
//     padding: 1rem 2rem;
//     display:flex;
//     flex-direction:column;
//     &>*
// `
// const Input = styled.input`
//     padding:0.5rem 1rem;
//     &:not(:last-child){
//         margin-bottom:1rem;
//     }
//  `
// const Label = styled.label`
//     margin-bottom:0.5rem;
// `
// const Checkbox = styled.input`
//     margin-right:0.5rem;
// `
// const CheckboxLabel = styled.label`
//     cursor:pointer;
//     display:flex;
//     align-items:content;
// `

// const Button = styled.button`
//     text-align:center;
//     border:none;
//     outline:none;
//     background: cornflowerblue;
//     color: white;
//     font-size:16px;
//     font-weight:600;
//     padding:0.75rem 1.5rem;
//     border-radius : 4px;
//     transition: all 0.1s ease-in-out;
//     &:hover {
//         background: lightblue;
//         cursor:pointer;
//         color : white;
//     }
// `
// const ButtonSecondary = styled.button`
//     text-align:center;
//     border:none;
//     outline:none;
//     background: gray;
//     color: darkgray;
//     font-size:16px;
//     font-weight:600;
//     padding:0.75rem 1.5rem;
//     border-radius : 4px;
//     transition: all 0.1s ease-in-out;
//     &:hover {
//         background: lightgray;
//         cursor:pointer;
//         color : white;
//     }
// `
// const ButtonsContainer = styled.div`
//     display:flex; 
//     justify-content:space-evenly;
//     margin-top:1rem;
// `