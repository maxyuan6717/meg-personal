import React, { useEffect } from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Phone1 from '../images/dumpling-preview/phone1.png';
import Phone2 from '../images/dumpling-preview/phone2.png';
import Phone3 from '../images/dumpling-preview/phone3.png';
import { Text } from '../ui';

import * as Styled from './Dumpling.styles';

export const Dumpling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Styled.Header>
        <div>
          <Text type="cursive-c1" color="white" lineHeight={80}>
            DUMPLING
            <br />
            DELIGHT
          </Text>
          <Text type="text-t2" color="white">
            Enhancing the dine-in
            <br />
            ordering experience.
          </Text>
        </div>
        <Styled.Phone src={Phone1} />
        <Styled.Phone src={Phone2} />
        <Styled.Phone src={Phone3} />
      </Styled.Header>
      <Styled.Content>
        <Styled.IntroSection>
          <div>
            <Text type="text-t3">My Role</Text>
            <Text type="text-t5">
              Solo student project for Google UX Design Professional Certificate
            </Text>
          </div>
          <div>
            <Text type="text-t3">Timeline</Text>
            <Text type="text-t5">July 2023 - September 2023</Text>
          </div>
        </Styled.IntroSection>
        <Styled.SectionDivider>PROBLEM</Styled.SectionDivider>
        <Styled.SectionTitle>
          Customers waste time dining in, thus opting for the convenience but
          compromised food quality of takeout.
        </Styled.SectionTitle>
        <Text type="text-t5">
          Almost all of us have experienced the agonizing wait for food to
          arrive at the table or for the waiter to finally come around. The
          convenience factor of delivery apps and takeout options have
          popularized online ordering—but at the expense of potential lower food
          quality.
        </Text>
        <Styled.SectionDivider>SOLUTION</Styled.SectionDivider>
        <Styled.SectionTitle>
          All-in-one mobile restaurant app for ordering, tracking, and paying.
        </Styled.SectionTitle>
        <Text type="text-t5">
          Combining the <b>convenience and accessibility</b> of takeout with the
          <b>quality and freshness</b> of eating in to create an{' '}
          <b>elevated dine-in experience</b> for a fictional casual authentic
          Chinese restaurant, Dumpling Delight.
        </Text>
        <Styled.SectionDivider>COMPETITIVE ANALYSIS</Styled.SectionDivider>
        <Styled.SectionTitle>
          No restaurant offers online ordering and real-time tracking for
          in-person dining.
        </Styled.SectionTitle>
        <Text type="text-t5">
          After analyzing two establishments with in-store ordering and multiple
          fast food chains with takeout/delivery/pickup options, I found that
          almost no restaurant provides customers with both a mobile ordering
          option and an order status tracking feature when dining in. I saw this
          as an opportunity to combine the best of both worlds.
        </Text>
        <Styled.SectionDivider>USER INTERVIEWS</Styled.SectionDivider>
        <Styled.SectionTitle>
          Interviewees favored both dining in and taking out—but for separate
          reasons.
        </Styled.SectionTitle>
        <Text type="text-t5">
          In addition to conducting competitive research, I interviewed 5
          individuals to learn about their typical eating out habits and their
          pain points when dining in and taking out.
          <br />
          <br />
          Research Questions:
          <Styled.UserInterviewsList>
            <li>
              How often do you go out to eat or order meals online? What is your
              motivation for doing so?
            </li>
            <li>Do you prefer dining in or taking out? Why?</li>
            <li>What are your main reasons for dining in/taking out?</li>
            <li>What challenges do you face when dining in/taking out?</li>
            <li>
              Tell me about an experience dining in or taking out that stuck
              with you.
            </li>
          </Styled.UserInterviewsList>
        </Text>
        <Styled.SectionDivider>MAJOR INSIGHTS</Styled.SectionDivider>
        <Styled.SectionTitle>
          Busy individuals prioritize convenience but still value the social
          aspect and better food quality of dining in.
        </Styled.SectionTitle>
        <Text type="text-t5">
          Through affinity mapping, I boiled down my research into a few key
          themes that defined the dine-in and takeout experiences. It then
          became my goal to marry the benefits of the two.
        </Text>
        <Styled.SectionDivider>USER PERSONA</Styled.SectionDivider>
        <Styled.SectionDivider>TESTING + ITERATING</Styled.SectionDivider>
        <Styled.SectionTitle>3 major areas of improvement</Styled.SectionTitle>
        <Text type="text-t5">
          Based on multiple rounds of feedback from 5 individuals, I made
          several iterations to my design with a focus on 3 key aspects of the
          ordering flow:
        </Text>
        <Styled.SectionDivider>FINAL PRODUCT</Styled.SectionDivider>
        <Styled.SectionTitle>The final design</Styled.SectionTitle>
        <Styled.SectionDivider>REFLECTIONS + NEXT STEPS</Styled.SectionDivider>
      </Styled.Content>
      <Footer />
    </>
  );
};
