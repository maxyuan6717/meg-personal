import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ArtCarousel } from '../components/ArtCarousel';
import { Footer } from '../components/NewFooter';
import { Navbar } from '../components/NewNavbar';
import { Work } from '../components/Work';
import Computer from '../images/clearify-preview/computer.png';
import Phone1 from '../images/dumpling-preview/phone1.png';
import Phone2 from '../images/dumpling-preview/phone2.png';
import Phone3 from '../images/dumpling-preview/phone3.png';
import Profile from '../images/profile.png';
import { Row, Text } from '../ui';

import * as Styled from './Home.styles';

export const Home = () => {
  const worksRef = useRef(null);
  const aboutRef = useRef(null);
  const artRef = useRef(null);
  const { state } = useLocation();
  const { section } = state || {};

  const scrollTo = (section, smooth = true) => {
    const y =
      section === 'home'
        ? 100
        : (section === 'works'
            ? worksRef
            : section === 'about'
            ? aboutRef
            : artRef
          ).current.offsetTop;
    window.scrollTo({ top: y - 100, behavior: smooth ? 'smooth' : 'auto' });
  };

  useEffect(() => {
    if (section) {
      scrollTo(section, false);
      // clear state
      window.history.replaceState({}, '');
    }
  }, [section]);

  return (
    <>
      <Styled.Splash>
        <Navbar fixed scrollTo={scrollTo} />
        <Styled.SplashContent>
          <img src={Profile} alt="Meg Yuan" />
          <Text type="karla-t1">
            Hello,
            <br />
            <br />
            I&apos;m Meg Yuan, a UI/UX designer who believes in simple, elegant,
            transformative design.
          </Text>
        </Styled.SplashContent>
        <Footer />
      </Styled.Splash>
      <Styled.Other>
        <Styled.Section ref={worksRef}>
          <Styled.SectionHeader type="karla-h3">My work</Styled.SectionHeader>
          <Styled.WorksGrid>
            {/* <Work
              name="Tabi"
              tags={['UX Design']}
              color="blue"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            ></Work> */}
            <Work
              name="Dumpling Delight"
              tags={['UX Design', 'UX Research']}
              color="red"
              description="a dine-in mobile ordering app for a fictional restaurant that combines the convenience of online ordering with the quality and unique social experience of dining in"
              link="/dumpling-delight"
            >
              <Row>
                <Styled.WorkImage src={Phone1} />
                <Styled.WorkImage src={Phone2} />
                <Styled.WorkImage src={Phone3} />
              </Row>
            </Work>
            <Work
              name="Clearify"
              tags={['UX Design', 'UX Research']}
              color="green"
              description="a skincare browser extension that generates easily digestible and personalized cosmetics reports of products from inputted ingredients lists"
              link="/clearify"
            >
              <Styled.WorkImage src={Computer} />
            </Work>
          </Styled.WorksGrid>
        </Styled.Section>
        <Styled.Section ref={aboutRef}>
          <Styled.SectionHeader type="karla-h3">About me</Styled.SectionHeader>
          <Styled.AboutMe type="karla-t1">
            I&apos;m a current junior studying Cognitive Science at UCLA.
            <br />
            <br />
            I think the brain is pretty cool, especially its ability to parse
            everything we sense and ultimately guide human behavior. We
            encounter design every day, so we&apos;re constantly interpreting
            and finding meaning in the things we interact with. I&apos;m on a
            mission to make interactions on the internet as seamless as possible
            through clean, functional design.
            <br />
            <br />
            I&apos;m also on a mission to read more books, be a better cook, and
            explore the world. Current read: <i>The Laws of Human Nature</i> by
            Robert Greene. Current food fixation: oatmeal. Next destination:
            Japan during cherry blossom season🌸.
            <br />
            <br />
            Reach out to connect, chat, or discuss a project.
          </Styled.AboutMe>
        </Styled.Section>
        <Styled.Section ref={artRef}>
          <Styled.SectionHeader type="karla-h3">
            Some artwork
          </Styled.SectionHeader>
          <ArtCarousel />
        </Styled.Section>
        <Styled.Section>
          <Text type="karla-h3">{'Thanks for visiting :)'}</Text>
        </Styled.Section>
      </Styled.Other>
    </>
  );
};
