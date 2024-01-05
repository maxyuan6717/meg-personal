import React from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ScrollUp } from '../components/ScrollUp';
import CompetitorLogos from '../images/clearify-case/competitor_logos.png';
import Insight1a from '../images/clearify-case/insight1a.png';
import Insight1b from '../images/clearify-case/insight1b.png';
import Insight2 from '../images/clearify-case/insight2.png';
import Insight3 from '../images/clearify-case/insight3.png';
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
        <Styled.InsightsGrid>
          <Styled.Insight>
            <Text size={28} weight={700}>
              Insight #1
            </Text>
            <Text type="text-t5">
              Half of respondents (50%) find it moderately important to know
              product ingredients (rated 4 out of 5), yet over half (54.5%)
              rated the ease of understanding the impact of ingredients as a 1
              or 2 out of 5, indicating an{' '}
              <span className="highlight">educational gap</span> in how
              ingredient effects are communicated to users.
            </Text>
            <Styled.Blob color="#FF9A24" />
          </Styled.Insight>
          <Column>
            <img src={Insight1a} alt="Insight 1a" width={450} height="auto" />
            <img src={Insight1b} alt="Insight 1b" width={450} height="auto" />
          </Column>
          <img src={Insight2} alt="Insight 2" width={450} height="auto" />
          <Styled.Insight>
            <Text size={28} weight={700}>
              Insight #2
            </Text>
            <Text type="text-t5">
              Common skincare concerns are moisturizing (72.7%), acne-fighting
              (63.6%), and UV protecting (63.6%). Respondents also highlighted
              the importance of finding products with clean, non-harsh
              ingredients that are{' '}
              <span className="highlight">
                compatible with their skin types
              </span>{' '}
              (e.g. dry, sensitive, oily).
            </Text>
            <Styled.Blob color="#A4D259" />
          </Styled.Insight>
          <Styled.Insight>
            <Text size={28} weight={700}>
              Insight #3
            </Text>
            <Text type="text-t5">
              Most users have not used apps or extensions to find skincare,
              relying mainly on <span className="highlight">social media</span>{' '}
              and <span className="highlight">word of mouth</span> for reviews
              and recommendations of skincare products.
            </Text>
            <Styled.Blob color="#93D3EE" />
          </Styled.Insight>
          <Row justify="center">
            <img src={Insight3} alt="Insight 3" width={350} height="auto" />
          </Row>
        </Styled.InsightsGrid>
        <Styled.SectionDivider>DESIGN SYSTEM</Styled.SectionDivider>
        <Styled.SectionTitle>
          Unifying style to build a minimalist, cohesive brand identity.
        </Styled.SectionTitle>
        <Text type="text-t5">
          The design system features a calming shade of green paired with
          simplistic typography to emphasize Clearify&apos;s mission of
          providing reliable and easily understandable cosmetics reports. The
          background textured gradient fuses together hues of green with warm
          shades of yellow to create an inviting look. The holistic minimalist
          aesthetic pushes forth the idea of simplifying skincare shopping.
        </Text>
        <Styled.SectionDivider>TESTING + ITERATING</Styled.SectionDivider>
        <Text type="text-t5">
          The evolution of our design was based on user survey responses and
          usability testing within our team due to the short timespan. However,
          the quick turnaround of feedback allowed us to iterate continuously
          and thus craft a more intuitive and seamless user experience.
        </Text>
        <Styled.SectionDivider>FINAL PRODUCT</Styled.SectionDivider>
        <Styled.SectionTitle>The final design</Styled.SectionTitle>
        <Styled.SectionDivider>REFLECTIONS + NEXT STEPS</Styled.SectionDivider>
        <Styled.SectionTitle>
          Keeping an open mind and staying flexible.
        </Styled.SectionTitle>
        <Text type="text-t5">
          Given the limited time frame, this project required flexibility and
          open-mindedness to address the constant flow of feedback from the
          team. The fast-paced setting taught me to iterate rapidly and
          efficiently. I also gained a newfound appreciation for the power of
          close collaboration.
          <br />
          <br />
          With more time, I would incorporate even greater personalization into
          the extension. A skincare quiz before utilizing the extension would
          allow users to further specify their skincare concerns. In turn, the
          extension would carefully curate product breakdowns that address
          users&apos; needs by highlighting specific ingredients to avoid or
          look out for. Implementing a comparison feature could streamline the
          research process even more by allowing users to contrast two skincare
          products at once.
        </Text>
      </Styled.Content>
      <Footer />
      <ScrollUp />
    </>
  );
};
