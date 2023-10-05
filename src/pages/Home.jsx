import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Phone1 from '../images/dumpling-preview/phone1.png';
import Phone2 from '../images/dumpling-preview/phone2.png';
import Phone3 from '../images/dumpling-preview/phone3.png';
import { Icons, Link, Row, Text } from '../ui';

import * as Styled from './Home.styles';

export const Home = () => {
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
            <Styled.Button>
              <Icons.linkedIn />
            </Styled.Button>
            <Styled.Button>
              <Icons.pdf />
            </Styled.Button>
          </Styled.ButtonRow>
        </Styled.SplashContent>
        <Styled.MyWorkContainer>
          <Text type="text-t3">my work</Text>
          <Styled.DownArrow>
            <Icons.downArrow />
          </Styled.DownArrow>
        </Styled.MyWorkContainer>
      </Styled.Splash>
      <Styled.WorksContainer>
        <RouterLink to="dumpling-delight">
          <Styled.Work>
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
        <Footer />
      </Styled.WorksContainer>
    </>
  );
};
