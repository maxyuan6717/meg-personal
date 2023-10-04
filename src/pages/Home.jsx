import React from 'react';

import { Navbar } from '../components/Navbar';
import { Icons, Link, Text } from '../ui';
import { palette } from '../ui/theme/base/palette';

import * as Styled from './Home.styles';

export const Home = () => {
  return (
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
  );
};
