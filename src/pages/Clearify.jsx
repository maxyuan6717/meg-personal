import React from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ScrollUp } from '../components/ScrollUp';
import CircleLogo1 from '../images/clearify-case/circle_logo1.png';
import CircleLogo2 from '../images/clearify-case/circle_logo2.png';
import CircleLogo3 from '../images/clearify-case/circle_logo3.png';
import CompetitorLogos from '../images/clearify-case/competitor_logos.png';
import FinalInput from '../images/clearify-case/final_input.png';
import FinalOutput from '../images/clearify-case/final_output.png';
import Iconography from '../images/clearify-case/iconography.png';
import InputScreens from '../images/clearify-case/input_screens.png';
import Insight1a from '../images/clearify-case/insight1a.png';
import Insight1b from '../images/clearify-case/insight1b.png';
import Insight2 from '../images/clearify-case/insight2.png';
import Insight3 from '../images/clearify-case/insight3.png';
import LogoGreen from '../images/clearify-case/logo_green.png';
import OutputScreens from '../images/clearify-case/output_screens.png';
import SquareLogo1 from '../images/clearify-case/square_logo1.png';
import SquareLogo2 from '../images/clearify-case/square_logo2.png';
import Computer from '../images/clearify-preview/computer.png';
import ClearifyLogo from '../images/clearify-preview/logo.png';
import { Column, Link, Row, Text } from '../ui';

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
        <Styled.DesignSystem>
          <Styled.DesignSystemCol>
            <Styled.DesignSystemHeader type="montserrat">
              TYPOGRAPHY
            </Styled.DesignSystemHeader>
            <Typography
              title="Headline 1"
              subtitle="Outfit SemiBold - H1 44px"
              weight={600}
              size={44}
            />
            <Typography
              title="Headline 2"
              subtitle="Outfit SemiBold - H2 36px"
              weight={600}
              size={36}
            />
            <Typography
              title="Headline 3"
              subtitle="Outfit SemiBold - H3 28px"
              weight={600}
              size={28}
            />
            <Typography
              title="Paragraph"
              subtitle="Outfit Regular - P 20px"
              weight={400}
              size={20}
            />
          </Styled.DesignSystemCol>
          <Styled.DesignSystemCol>
            <Styled.DesignSystemHeader type="montserrat">
              COLOR
            </Styled.DesignSystemHeader>
            <Color label="Primary" hex="#40A582" />
            <Color label="Accent 1" hex="#BFDED1" />
            <Color label="Accent 2" hex="#338468" />
            <Color label="Negative" hex="#F34E4E" />
            <Color label="Grey" hex="#D0D0D0" />
          </Styled.DesignSystemCol>
          <Styled.DesignSystemCol>
            <Styled.DesignSystemHeader type="montserrat">
              SPACING
            </Styled.DesignSystemHeader>
            <Styled.SpacingGrid>
              <Spacing size={5} label="XS" />
              <Spacing size={10} label="S" />
              <Spacing size={15} label="M" />
              <Spacing size={25} label="L" />
              <Spacing size={40} label="XL" />
              <Spacing size={65} label="XXL" />
            </Styled.SpacingGrid>
          </Styled.DesignSystemCol>
          <Styled.DesignSystemCol>
            <Styled.DesignSystemHeader type="montserrat">
              ICONOGRAPHY
            </Styled.DesignSystemHeader>
            <Styled.Iconography src={Iconography} alt="Iconography" />
          </Styled.DesignSystemCol>
        </Styled.DesignSystem>
        <Styled.Logos justify="center">
          <Column>
            <Styled.WordLogo src={LogoGreen} alt="Clearify Logo" />
            <Styled.CircleLogos>
              <Styled.CircleLogo src={CircleLogo1} alt="Circle Logo 1" />
              <Styled.CircleLogo src={CircleLogo2} alt="Circle Logo 2" />
              <Styled.CircleLogo src={CircleLogo3} alt="Circle Logo 3" />
            </Styled.CircleLogos>
          </Column>
          <Styled.SquareLogo src={SquareLogo1} alt="Square Logo 1" />
          <Styled.SquareLogo src={SquareLogo2} alt="Square Logo 2" />
        </Styled.Logos>
        <Styled.SectionDivider>TESTING + ITERATING</Styled.SectionDivider>

        <Text type="text-t5">
          The evolution of our design was based on user survey responses and
          usability testing within our team due to the short timespan. However,
          the quick turnaround of feedback allowed us to iterate continuously
          and thus craft a more intuitive and seamless user experience.
        </Text>
        <br />
        <Text type="text-t1" weight={700}>
          Input screen: minimizing user effort.
        </Text>
        <br />
        <Text type="text-t5">
          A common theme across all wireframes for the input screen was
          simplicity.{' '}
          <b>
            <i>
              How can we streamline the input process so that users expend as
              little effort as possible attaining product analyses?
            </i>
          </b>
          Ultimately, we opted for a singular input field, clear
          calls-to-action, and minimal branding to stay consistent with
          Clearify&apos;s clean visual identity.
        </Text>
        <Styled.InputScreens src={InputScreens} alt="Input Screens" />
        <Text type="text-t1" weight={700}>
          Output screen: in-depth and personalized yet straightforward analysis.
        </Text>
        <br />
        <Text type="text-t5">
          Because skin type compatibility was a primary user concern as
          indicated from our user survey, we placed a skin type suitability
          graphic at the head of the analysis screen. Thus, users receive
          personalized insight first thing.
          <br />
          <br />
          Users pinpointed 2 additional concerns, which confirmed our initial
          approach to the output screen: 1) potential harmful ingredients and 2)
          the beneficial effects of a product.
          <Styled.OutputConcerns>
            <li>
              Potential harmful ingredients -{' '}
              <span>
                feedback from initial iterations revealed confusion over the
                combination of the red-green color coding and “ingredient-free”
                wording. The need to clarify exactly which harmful ingredients
                are present within a product led to simplifying the language and
                section header.
              </span>
            </li>
            <li>
              Beneficial product effects -{' '}
              <span>
                added icons for ease of identification of the positive effects
                of a skincare product, such as moisturizing, acne-fighting, and
                brightening.
              </span>
            </li>
          </Styled.OutputConcerns>
        </Text>
        <Styled.OutputScreens src={OutputScreens} alt="Output Screens" />
        <Text type="text-t1" weight={700}>
          Enhancing clarity
        </Text>
        <br />
        <Text type="text-t5">
          <Styled.Enhancements>
            <li>
              <b>Eliminated rating systems</b> to minimize confusion and the
              friction of needing to learn how they are codified
            </li>
            <li>
              <b>Reduced information overload</b> by removing the redundant
              ingredients list within the output screen
            </li>
            <li>
              <b>Maintained a consistent, left-aligned layout</b> with clearly
              marked sections for ease of readability
            </li>
          </Styled.Enhancements>
        </Text>
        <Styled.SectionDivider>FINAL PRODUCT</Styled.SectionDivider>
        <Styled.SectionTitle>The final design</Styled.SectionTitle>
        <Row justify="center" align="flex-start">
          <Styled.FinalDesignColumn>
            <Text type="text-t3" weight={700}>
              Input Screen
            </Text>
            <Styled.FinalScreen src={FinalInput} />
          </Styled.FinalDesignColumn>
          <Styled.FinalDesignColumn>
            <Text type="text-t3" weight={700}>
              Output Screen
            </Text>
            <Styled.FinalScreen src={FinalOutput} />
          </Styled.FinalDesignColumn>
        </Row>
        <Text type="text-t3" weight={700}>
          In Action
        </Text>
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
        <Styled.SectionDivider>&nbsp;</Styled.SectionDivider>
        <Styled.ThankYou>
          <Text size={32} weight={700}>
            Thank you for reading!
          </Text>
          <Text type="text-t4">
            Reach out to me at{' '}
            <Link href="mailto: megyuan@ucla.edu">megyuan@ucla.edu</Link> to
            learn more and connect.
          </Text>
        </Styled.ThankYou>
      </Styled.Content>
      <Footer />
      <ScrollUp />
    </>
  );
};

const Typography = ({ title, subtitle, weight, size }) => {
  return (
    <Styled.Typography>
      <Text type="outfit" weight={weight} size={size}>
        {title}
      </Text>
      <Text type="montserrat" size={10} weight={500}>
        {subtitle}
      </Text>
    </Styled.Typography>
  );
};

const Color = ({ label, hex }) => {
  return (
    <Styled.ColorRow>
      <Styled.ColorSquare color={hex} />
      <Text type="montserrat" size={10} weight={500}>
        {label}
        <br />
        {hex}
      </Text>
    </Styled.ColorRow>
  );
};

const Spacing = ({ size, label }) => {
  return (
    <>
      <Styled.SpacingSquare size={size} />
      <Text type="montserrat" size={10} weight={500}>
        {`${size}px ${label}`}
      </Text>
    </>
  );
};
