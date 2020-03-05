import React from 'react'
import { CardTopImage, ImageCircle, InfoContainer, QuoteIcon, Quote, Author } from './Cards.styles'
import { ButtonInverse } from '../../styles/Buttons';

function CardImageTop() {
    return (
        <CardTopImage>
            <ImageCircle src="https://as2.ftcdn.net/jpg/02/19/68/33/500_F_219683307_uw8xeFLSUzRGtTBD9zExmL2iy6VUcbfM.jpg" />
            <InfoContainer>
                <QuoteIcon>
                    <Quote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis omnis nam nesciunt illo, pariatur eius, facere architecto ex velit ducimus libero sapiente nulla, et neque.</Quote>
                </QuoteIcon>
                <Author>Marijn Moerman - Deelnemer Neem een OV-dag</Author>
                <ButtonInverse>Find out why</ButtonInverse>
            </InfoContainer>
        </CardTopImage>
    )
}

export default CardImageTop

// const CardTopImage = styled.div`
//     padding-top:60px;
//     max-width: 350px;
//     min-width:250px;
//     border-radius:6px;
//     box-shadow:0 1rem 1rem rgba(0,0,0,0.3);
//     transition : all 0.09s ease-in;
//     position: relative;
//     background: linear-gradient(to bottom right,cornflowerblue,lightblue);
//     &:hover {
//         box-shadow:0 1rem 1.5rem rgba(0,0,0,0.3);
//     }
// `
// const ImageCircle = styled.img`
//     width: 100px;
//     object-fit: cover;
//     object-position: center;
//     border-radius: 50%;
//     height: 100px;
//     position: absolute;
//     top: -50px;
//     left:50px;
//     border:5px solid white;
//     box-sizing : border-box;
// `
// const InfoContainer = styled.div`
//     padding : 1rem;
//     z-index:30;
// `
// const Quote = styled.p`
//     font-size:19px;
//     color : white;
//     margin-bottom:2rem;
//     letter-spacing : 1px;
// `
// const QuoteIcon = styled.span`
// position:relative;

// `
// const Author = styled.p`
//     font-size:16px;
//     color:white;
//     width:70%;
// `
// const ButtonInverse = styled.button`
//     border:none;
//     outline:none;
//     background: white;
//     color: cornflowerblue;
//     font-size:16px;
//     font-weight:600;
//     padding:0.75rem 1.5rem;
//     border-radius : 6px;
//     &:hover {
//         background: floralwhite;
//         cursor:pointer;
//     }

// `