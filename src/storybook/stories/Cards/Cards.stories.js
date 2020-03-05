import React from 'react';
import '../../../utility.scss';
import CardPlain from "../../components/Cards/CardPlain";
import centered from '@storybook/addon-centered/react';
import CardImage from '../../components/Cards/CardImage'
import CardImageTop from "../../components/Cards/CardImageTops";
import CardWithDate from "../../components/Cards/CardWithDate";
import CardNotification from "../../components/Cards/CardNotification";
import CardDoubleButton from "../../components/Cards/CardDoubleButton";
import CardSeparated from "../../components/Cards/CardSeparated";
import CardSubscribeForm from '../../components/Cards/CardSubscribeForm';



export default {
    title: 'Cards',
    decorators: [centered]

};

export const Card_Text_Button = () => <CardPlain />;
export const Card_Image = () => <CardImage />;
export const Card_Image_Top = () => <CardImageTop />;
export const Card_With_Date = () => <CardWithDate />;
export const Card_Notification = () => <CardNotification />;
export const Card_DoubleButton = () => <CardDoubleButton />;
export const Card_Separated = () => <CardSeparated />;
export const Card_Subscribe_Form = () => <CardSubscribeForm />;