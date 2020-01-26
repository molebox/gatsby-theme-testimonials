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
    margin: 1em 2em;

    & > h1,
    h2, p {
      font-size: 0.7em;
    }

    border-radius: 0.5em;
    padding: 1em;
    box-shadow: inset 6px 6px 13px rgb(163, 177, 198, 0.4), inset -6px -6px 13px rgba(255, 255, 255, 0.7);

    // Desktop
    @media (min-width: 48em) {
        display: flex;
        justify-content: center;
      & > h1,
      h2, p {
        font-size: 1em;
      }
    }
`;

const Container = styled.main`
    margin: 1em 2em;
    border-radius: 0.5em;
    padding: 1em;
    box-shadow: inset 6px 6px 13px rgb(163, 177, 198, 0.4), inset -6px -6px 13px rgba(255, 255, 255, 0.7);
`;

export default () => {

    return (
    <DefaultLayout>
        <Header sx={{
            boxShadow: 'neumorphismHover'
        }}>
            <h1 sx={{
                fontFamily: 'Nunito'
            }}>gatsby-theme-testimonials</h1>
            <h2 sx={{
                fontFamily: 'Nunito',
                fontWeight: '400',
                margin: '1em 2em'
            }}>
                This is Gatsby theme to add customer testimonials to your website. 
                The testimonial cards are exported as a section to just insert into your JSX. 
                You add the data to be displayed via json files located in a testimonials folder at your projects root. This file will be created for you when you install the theme if you don't add it yourself.
            </h2>
            <p sx={{
                fontFamily: 'Nunito',
                fontWeight: '400',
                margin: '1em 2em'
            }}>
            Install the theme with either yarn <strong>yarn add gatsby-theme-testimonials</strong> or npm <strong>npm i gatsby-theme-testimonials</strong>
            </p>
            <p sx={{
                fontFamily: 'Nunito',
                fontWeight: '400',
                margin: '1em 2em'
            }}>
                The default styling is <a href="https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6">neumorphism</a>, this can be overriden by shadowing the TestimonialCard component.
            </p>
            <p sx={{
                fontFamily: 'Nunito',
                fontWeight: '400',
                margin: '1em 2em'
            }}>
                NPM package: <a href="https://www.npmjs.com/package/gatsby-theme-testimonials">gatsby-theme-testimonials</a>
            </p>
            <p sx={{
                fontFamily: 'Nunito',
                fontWeight: '400',
                margin: '1em 2em'
            }}>
                GitHub repository: <a href="https://github.com/molebox/gatsby-theme-testimonials">github.com/molebox/gatsby-theme-testimonials</a>
            </p>
        </Header>
        <Container>
        <TestimonialSection/>
        </Container>
    </DefaultLayout>
    )
}