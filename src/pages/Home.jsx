import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import FadeInSection from '../components/FadeInSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ScrollUp } from '../components/ScrollUp';
import resume from '../files/meg_yuan_resume.pdf';
import { useDimensions } from '../hooks/useDimensions';
import Computer from '../images/clearify-preview/computer.png';
import ClearifyLogo from '../images/clearify-preview/logo.png';
import Phone1 from '../images/dumpling-preview/phone1.png';
import Phone2 from '../images/dumpling-preview/phone2.png';
import Phone3 from '../images/dumpling-preview/phone3.png';
import { Column, Icons, Link, Row, Text } from '../ui';

import * as Styled from './Home.styles';

const round = (x) => 5 * Math.floor(x / 5);

export const Home = () => {
  const { height } = useDimensions();
  const [myWorkFade, setMyWorkFade] = useState(0);

  useEffect(() => {
    const fadeOnScroll = () => {
      // decrement opacity by 5% every 5% of height scrolled
      const opacity =
        round(100 * Math.max(0, window.scrollY / (height * 0.8))) / 100;
      setMyWorkFade(opacity);
    };
    window.addEventListener('scroll', fadeOnScroll);
    return () => window.removeEventListener('scroll', fadeOnScroll);
  }, [height]);

  const scrollToWorks = () =>
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    });

  return (
    <>
      <Styled.Splash>
        <Navbar />
        <Styled.SplashContent>
          <Text type="display-h1">Hi, I&apos;m Meg.</Text>
          <Text size={28} weight={500}>
            I&apos;m a <span className="blue">UI/UX designer</span> passionate
            about creating engaging, effective, and aesthetic user-centered
            solutions.
            <br />
            <br />
            Want to connect, chat, or discuss a project?
            <br />
            Reach out to me at{' '}
            <Link href="mailto: megyuan@ucla.edu">megyuan@ucla.edu</Link>.
          </Text>
          <Styled.ButtonRow>
            <Styled.Button
              href="https://www.linkedin.com/in/megyuan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedIn />
            </Styled.Button>
            <Styled.Button
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.pdf />
            </Styled.Button>
          </Styled.ButtonRow>
        </Styled.SplashContent>
        <Styled.MyWorkContainer onClick={scrollToWorks} fade={myWorkFade}>
          <Text type="text-t3">my work</Text>
          <Styled.DownArrow>
            <Icons.downArrow />
          </Styled.DownArrow>
        </Styled.MyWorkContainer>
      </Styled.Splash>
      <Styled.WorksContainer>
        <FadeInSection>
          <RouterLink to="dumpling-delight">
            <Styled.Work color="red">
              <Row>
                <div>
                  <Text type="cursive-c2" color="white" lineHeight={80}>
                    DUMPLING
                    <br />
                    DELIGHT
                  </Text>
                  <Text type="text-t3" color="white">
                    Enhancing the dine-in
                    <br />
                    ordering experience.
                  </Text>
                </div>
                <Styled.Phone src={Phone1} />
                <Styled.Phone src={Phone2} />
                <Styled.Phone src={Phone3} />
              </Row>
            </Styled.Work>
          </RouterLink>
        </FadeInSection>
        <FadeInSection>
          <RouterLink to="clearify">
            <Styled.Work color="green">
              <Row>
                <Styled.Computer src={Computer} />
                <Column>
                  <Styled.ClearifyLogo src={ClearifyLogo} alt="Clearify Logo" />
                  <Text type="outfit" color="white">
                    No extra tabs.
                    <br />
                    No extra stress.
                  </Text>
                </Column>
              </Row>
            </Styled.Work>
          </RouterLink>
        </FadeInSection>
        <Footer />
        <ScrollUp />
      </Styled.WorksContainer>
    </>
  );
};
