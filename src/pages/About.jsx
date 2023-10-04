import React from 'react';

import { Navbar } from '../components/Navbar';
import Oatmeal from '../images/oatmeal.png';
import Profile from '../images/profile.png';
import { Link, Text } from '../ui';

import * as Styled from './About.styles';

export const About = () => {
  return (
    <Styled.Container>
      <Navbar />
      <Styled.Content>
        <Styled.FirstSection>
          <Styled.ProfileImage src={Profile} />
          <Styled.FirstSectionText>
            <Text type="text-t2" weight={500}>
              Hello!
            </Text>
            <Text type="text-t4">
              I&apos;m Meg Yuan, a current junior studying Cognitive Science at
              UCLA.
            </Text>
            <Text type="text-t4">
              My most memorable experiences from childhood were shaped by music
              and film. I&apos;m always left with a visceral feeling of raw
              emotion and appreciation for the arts whenever I encounter great
              cinema and pieces.
            </Text>
            <Text type="text-t4">
              <b>
                I believe technology has the same capacity to touch
                people&apos;s souls.
              </b>{' '}
              It is thus my desire to share this capacity by building
              meaningful, impactful applications for those around me.
            </Text>
          </Styled.FirstSectionText>
        </Styled.FirstSection>
        <Styled.Asterisks>
          <Text type="text-t4">❃❃❃</Text>
        </Styled.Asterisks>
        <Styled.SecondSection>
          <Text type="text-t4">
            When I&apos;m not designing, you can usually find me perfecting my
            morning oatmeal recipe, hitting the gym, getting lost in movie
            soundtracks, or devouring a book (current read:{' '}
            <i>The Laws of Human Nature</i> by Robert Greene).
          </Text>
          <Styled.OatmealImage src={Oatmeal} />
        </Styled.SecondSection>
        <Text type="text-t4">
          You can contact me at{' '}
          <Link href="mailto: megyuan@ucla.edu">megyuan@ucla.edu</Link>.
        </Text>
      </Styled.Content>
    </Styled.Container>
  );
};
