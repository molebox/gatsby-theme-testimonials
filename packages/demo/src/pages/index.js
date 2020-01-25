/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import {TestimonialSection} from 'gatsby-theme-testimonials';
import DefaultLayout from "../components/DefaultLayout";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em
`;

export default () => {

    return (
    <DefaultLayout>
        <Header>
            <h1 sx={{
                fontFamily: 'Nunito'
            }}>gatsby-theme-testimonials</h1>
            <h2 sx={{
                fontFamily: 'Nunito',
                fontWeight: '400',
                fontSize: [2],
                margin: '1em 2em'
            }}>
                This is Gatsby theme to add customer testimonials to your website. 
                The testimonial cards are exported as a section to just insert into your JSX. 
                You add the data to be displayed via json files located in a testimonials folder at your projects root. This file will be created for you when you install the theme if you don't add it yourself.
            </h2>
            <p sx={{
                fontFamily: 'Nunito',
                fontWeight: '400',
                fontSize: [2]
            }}>
            Install the theme with either yarn <strong>yarn add gatsby-theme-testimonials</strong> or npm <strong>npm i gatsby-theme-testimonials</strong>
            </p>
        </Header>
        <TestimonialSection/>
    </DefaultLayout>
    )
}