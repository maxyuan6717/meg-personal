import React, { useEffect } from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ScrollUp } from '../components/ScrollUp';
import CompetitorLogos from '../images/clearify-case/competitor_logos.png';
import Computer from '../images/clearify-preview/computer.png';
import ClearifyLogo from '../images/clearify-preview/logo.png';
import { Column, Row, Text } from '../ui';

import * as Styled from './Clearify.styles';

export const Clearify = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Navbar />
      <Styled.Header>
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
      </Styled.Header>
      <Styled.Content>
        <Styled.IntroSection>
          <div>
            <Text type="text-t3">My Role</Text>
            <Text type="text-t5">
              UI/UX Designer
              <br />
              (part of a collaboration within Creative Labs, a student-led
              design association at UCLA)
            </Text>
          </div>
          <div>
            <Text type="text-t3">Timeline</Text>
            <Text type="text-t5">
              November 2023 - December 2023
              <br />
              (6 weeks)
            </Text>
          </div>
        </Styled.IntroSection>
        <Styled.SectionDivider>PROBLEM</Styled.SectionDivider>
        <Styled.SectionTitle>
          How might we reduce the confusion and overwhelm of shopping for
          skincare online?
        </Styled.SectionTitle>
        <Text type="text-t5">
          Navigating the online skincare market—with its wide array of
          competitive brands and the constant arrival of new products—can be an
          overwhelming task. Unfamiliarity with ingredients and minimal
          personalization can make it difficult for users to find products that
          work for their skin type and address unique skincare concerns, such as
          acne, pigmentation, and sensitivity.
        </Text>
        <Styled.SectionDivider>SOLUTION</Styled.SectionDivider>
        <Styled.SectionTitle>
          Create a browser extension that simplifies the skincare research
          process by offering more personalized, easy-to-understand product
          analyses.
        </Styled.SectionTitle>
        <Text type="text-t5">
          Clearify aims to make skincare shopping more accessible and less
          stressful. The browser extension generates a detailed cosmetics report
          from an inputted ingredient list; it highlights the benefits and
          potential hazards of a skincare product on top of assessing skin type
          compatibility. With Clearify, users gain a more personalized approach
          to skincare shopping and save time by reducing the need to switch
          between multiple tabs of skincare research.
        </Text>
        <Styled.SectionDivider>COMPETITIVE ANALYSIS</Styled.SectionDivider>
        <Styled.SectionTitle>
          Current skincare analysis tools lack a balance between clear
          information presentation and user-friendly interfaces.
        </Styled.SectionTitle>
        <Text type="text-t5">
          Looking at both API resources and existing skincare analysis tools, we
          discovered the range of analysis features typically offered and
          opportunities for Clearify to improve upon the present skincare
          research landscape.
        </Text>
        <Styled.CompetitorLogos src={CompetitorLogos} />
        <Styled.CompetitorCols>
          <Column>
            <Text type="text-t4" weight={700}>
              Competitor Strengths
            </Text>
            <ul>
              <li>
                <b>Visual Aids</b> - use of icons and color coding allow for
                more digestible analyses and add visual appeal.
              </li>
              <li>
                <b>Personalized Analysis</b> - inclusion of notable ingredient
                benefits and skin type suitability offers greater
                personalization by catering towards specific skincare needs and
                goals.
              </li>
            </ul>
          </Column>
          <Column>
            <Text type="text-t4" weight={700}>
              Competitor Weaknesses
            </Text>
            <ul>
              <li>
                <b>Unclear Ratings System</b> - individual ingredient and
                overall product ratings/scores lack helpfulness due to vague
                explanations.
              </li>
              <li>
                <b>Text-Heavy Pages</b> - information overload creates visual
                confusion and overwhelm, which can deter users away from a site.
              </li>
              <li>
                <b>Organization & Layout</b> - optimizing page layout to better
                reflect users&apos; greatest skincare concerns could increase
                usability and satisfaction.
              </li>
            </ul>
          </Column>
        </Styled.CompetitorCols>
        <Styled.SectionDivider>USER SURVEYS</Styled.SectionDivider>
        <Styled.SectionTitle>
          Survey responses indicated a potential market gap.
        </Styled.SectionTitle>
        <Text type="text-t5">
          We conducted a survey to better gauge users&apos; skincare shopping
          behaviors and needs, receiving 22 responses from university students.
        </Text>
      </Styled.Content>
      <Footer />
      <ScrollUp />
    </>
  );
};
