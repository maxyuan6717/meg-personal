import React, { useEffect, useRef, useState } from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PlayWhenVisibleVideo } from '../components/PlayWhenVisibleVideo';
import { ScrollUp } from '../components/ScrollUp';
import Chipotle from '../images/dumpling-case/chipotle.png';
import Dominos from '../images/dumpling-case/dominos.jpeg';
import Final1 from '../images/dumpling-case/final1.png';
import Final2 from '../images/dumpling-case/final2.png';
import Final3 from '../images/dumpling-case/final3.png';
import Final4 from '../images/dumpling-case/final4.png';
import Final5 from '../images/dumpling-case/final5.png';
import Final6 from '../images/dumpling-case/final6.png';
import Haidilao from '../images/dumpling-case/heidilao.jpeg';
import Persona from '../images/dumpling-case/persona.png';
import Sunright from '../images/dumpling-case/sunright.png';
import Phone1 from '../images/dumpling-preview/phone1.png';
import Phone2 from '../images/dumpling-preview/phone2.png';
import Phone3 from '../images/dumpling-preview/phone3.png';
import { Column, Icons, Link, Row, Text } from '../ui';

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
        <Styled.ProblemQuestion type="text-t3" color="red">
          How might we expedite the dine-in ordering process while maintaining
          the quality and freshness of food?
          <div>?</div>
        </Styled.ProblemQuestion>
        <Styled.SectionDivider>SOLUTION</Styled.SectionDivider>
        <Styled.SectionTitle>
          All-in-one mobile restaurant app for ordering, tracking, and paying.
        </Styled.SectionTitle>
        <Text type="text-t5">
          Combining the <b>convenience and accessibility</b> of takeout with the{' '}
          <b>quality and freshness</b> of eating in to create an{' '}
          <b>elevated dine-in experience</b> for a fictional casual authentic
          Chinese restaurant, Dumpling Delight.
        </Text>
        <Styled.Steps>
          <Styled.Step>
            <Styled.StepText>
              <Text type="text-t2" weight={700}>
                Ordering
              </Text>
              <Text type="text-t5">
                <ul>
                  <li>Start ordering whenever you are ready</li>
                  <li>
                    Easy-to-read menu with enticing imagery and nutritional
                    breakdowns
                  </li>
                  <li>Order more and reorder anytime</li>
                </ul>
              </Text>
              <div className="bg-number">1</div>
            </Styled.StepText>
            <PlayWhenVisibleVideo
              width="360"
              src="videos/dumpling-case/solution1.mov"
            />
          </Styled.Step>
          <Styled.Step>
            <PlayWhenVisibleVideo
              width="360"
              src="videos/dumpling-case/solution2.mov"
            />
            <Styled.StepText>
              <Text type="text-t2" weight={700}>
                Tracking
              </Text>
              <Text type="text-t5">
                <ul>
                  <li>
                    Scan your table barcode at the start to link your orders to
                    the kitchen
                  </li>
                  <li>
                    Receive up-to-date tracking for each ordered item from
                    preparation to arrival
                  </li>
                  <li>Track the status of all ordered items on one page</li>
                </ul>
              </Text>
              <div className="bg-number">2</div>
            </Styled.StepText>
          </Styled.Step>
          <Styled.Step>
            <Styled.StepText>
              <Text type="text-t2" weight={700}>
                Paying
              </Text>
              <Text type="text-t5">
                <ul>
                  <li>Pay whenever you are ready</li>
                  <li>
                    Multiple payment options, including traditionally through
                    check and via online payment forms
                  </li>
                  <li>
                    “Split the Bill” feature eliminates the hassle of pulling
                    out a calculator post-payment (for parties up to 3)
                  </li>
                </ul>
              </Text>
              <div className="bg-number">3</div>
            </Styled.StepText>
            <PlayWhenVisibleVideo
              width="360"
              src="videos/dumpling-case/solution3.mov"
            />
          </Styled.Step>
        </Styled.Steps>
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
        <Styled.Restaurants>
          <Column>
            <img src={Haidilao} />
            <Text typ="text-t5" weight={700}>
              Haidilao
            </Text>
          </Column>
          <Column>
            <img src={Sunright} />
            <Text typ="text-t5" weight={700}>
              Sunright Tea Studio
            </Text>
          </Column>
          <Column>
            <img src={Dominos} />
            <Text typ="text-t5" weight={700}>
              Domino&apos;s
            </Text>
          </Column>
          <Column>
            <img src={Chipotle} />
            <Text typ="text-t5" weight={700}>
              Chiptole
            </Text>
          </Column>
        </Styled.Restaurants>
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
        <PlayWhenVisibleVideo
          width="100%"
          src="videos/dumpling-case/user-interview.mp4"
          marginTop={80}
        />
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
        <Styled.Insights>
          <Styled.InsightColumn>
            <Text type="text-t2" weight={500}>
              Dine-In
            </Text>
            <Text type="text-t4">
              &ldquo;The experience makes the meal&rdquo;
            </Text>
            <Row>
              <Styled.InsightExampleColumn maxWidth={168}>
                <Icons.insight1 width={90} />
                <Text type="text-t5" weight={500}>
                  Better food quality & presentation
                </Text>
              </Styled.InsightExampleColumn>
              <Styled.InsightExampleColumn maxWidth={244}>
                <Icons.insight2 width={67} />
                <Text type="text-t5" weight={500}>
                  Socialization & celebration of special occasions
                </Text>
              </Styled.InsightExampleColumn>
            </Row>
          </Styled.InsightColumn>
          <Styled.InsightColumn>
            <Text type="text-t2" weight={500}>
              Takeout
            </Text>
            <Text type="text-t4">&ldquo;Convenience above all&rdquo;</Text>
            <Row>
              <Styled.InsightExampleColumn maxWidth={222}>
                <Icons.insight3 width={85} />
                <Text type="text-t5" weight={500}>
                  More expansive online menus with useful features
                </Text>
              </Styled.InsightExampleColumn>
              <Styled.InsightExampleColumn maxWidth={182}>
                <Icons.insight4 width={85} />
                <Text type="text-t5" weight={500}>
                  Expedited ordering process saves time
                </Text>
              </Styled.InsightExampleColumn>
            </Row>
          </Styled.InsightColumn>
        </Styled.Insights>
        <Styled.SectionDivider>USER PERSONA</Styled.SectionDivider>
        <Styled.PersonaSection>
          <Styled.PersonaImage>
            <img src={Persona} width="100%" height="auto" />
            <div>
              <Text type="text-t6" size={50} weight={700}>
                Louise
              </Text>
              <Text type="text-t6" size={20} weight={700}>
                24 | Grad Student
              </Text>
            </div>
          </Styled.PersonaImage>
          <Styled.PersonaText>
            <Text type="text-t7" color="red" weight={600} italic>
              “I&apos;m always looking for ways to maximize the use of my time.”
            </Text>
            <div>
              <Text type="text-t6">About</Text>
              <Text type="text-t7">
                Hi! I&apos;m Louise, a graduate student studying Law at the
                University of Pennsylvania. With my busy course schedule and
                part-time barista job, I rarely have the time to cook for
                myself. I often order takeout out of convenience because I can
                easily order from my phone and pick up the food on the way home
                from school or work. Sometimes I like to eat in at restaurants
                on the weekends to treat myself or catch up with a friend, but
                it always takes up a good chunk of time. I&apos;m a huge foodie,
                and I wish I had the time to try more restaurants in-person.
              </Text>
            </div>
            <div>
              <Text type="text-t6">Goals</Text>
              <Text type="text-t7">
                <ul>
                  <li>Achieve a good work-life balance</li>
                  <li>
                    Spend as little time as possible thinking about and
                    preparing meals
                  </li>
                  <li>Try new cuisines</li>
                </ul>
              </Text>
            </div>
            <div>
              <Text type="text-t6">Motivations</Text>
              <Text type="text-t7">
                <ul>
                  <li>Excel at school and maintain social life</li>
                  <li>Reduce daily stress around food</li>
                  <li>Experience different cultures by expanding palate</li>
                </ul>
              </Text>
            </div>
            <div>
              <Text type="text-t6">Frustrations</Text>
              <Text type="text-t7">
                <ul>
                  <li>Cooking for one is inefficient </li>
                  <li>
                    Sometimes online orders are wrong or the food is cold when
                    picking up
                  </li>
                  <li>
                    Could better use the time spent waiting for food to arrive
                    when dining in
                  </li>
                </ul>
              </Text>
            </div>
          </Styled.PersonaText>
        </Styled.PersonaSection>
        <Styled.SectionDivider>TESTING + ITERATING</Styled.SectionDivider>
        <Styled.SectionTitle>3 major areas of improvement</Styled.SectionTitle>
        <Text type="text-t5">
          Based on multiple rounds of feedback from 5 individuals, I made
          several iterations to my design with a focus on 3 key aspects of the
          ordering flow:
        </Text>
        <Styled.Steps marginTop={100}>
          <Styled.Step gap={100}>
            <Styled.ImprovementVideos>
              <PlayPauseVideo src="videos/dumpling-case/improve1-1.mov" />
              <Icons.rightArrow />
              <PlayPauseVideo src="videos/dumpling-case/improve1-2.mov" />
            </Styled.ImprovementVideos>
            <Styled.StepText maxWidth={465}>
              <Text type="text-t2" weight={700}>
                Simplify the send-to-kitchen process
              </Text>
              <Text type="text-t5">
                <ul>
                  <li>
                    Earliest iterations contained multiple confirmation screens
                    before sending an item to the kitchen, which was tedious and
                    unnecessary
                  </li>
                  <li>
                    Reduced the number of ordering steps by allowing users to
                    add as many items to the cart before directly sending them
                    to the kitchen through the cart
                  </li>
                </ul>
              </Text>
              <div className="bg-number">1</div>
            </Styled.StepText>
          </Styled.Step>
          <Styled.Step gap={100}>
            <Styled.StepText maxWidth={465}>
              <Text type="text-t2" weight={700}>
                Expand the cart preview functionality
              </Text>
              <Text type="text-t5">
                <ul>
                  <li>
                    Replaced the previous system of multiple rounds of orders
                    with a simplified add-to-cart process
                  </li>
                  <li>
                    Adjust an item&apos;s quantity before sending to the
                    kitchen, track the status of all ordered items, & quickly
                    reorder items all within the cart
                  </li>
                  <li>
                    Moved the cart icon from the top right corner of the screen
                    to the center of the navigation bar for easy access
                  </li>
                </ul>
              </Text>
              <div className="bg-number">2</div>
            </Styled.StepText>
            <Styled.ImprovementVideos>
              <PlayPauseVideo src="videos/dumpling-case/improve2-1.mov" />
              <Icons.rightArrow />
              <PlayPauseVideo src="videos/dumpling-case/improve2-2.mov" />
            </Styled.ImprovementVideos>
          </Styled.Step>
          <Styled.Step gap={100}>
            <Styled.ImprovementVideos>
              <PlayPauseVideo src="videos/dumpling-case/improve3-1.mov" />
              <Icons.rightArrow />
              <PlayPauseVideo src="videos/dumpling-case/improve3-2.mov" />
            </Styled.ImprovementVideos>
            <Styled.StepText maxWidth={465}>
              <Text type="text-t2" weight={700}>
                Add consistent reminders to guide action
              </Text>
              <Text type="text-t5">
                <ul>
                  <li>
                    Testing revealed hesitations over how to proceed after
                    adding items to the cart and after receiving all ordered
                    items
                  </li>
                  <li>
                    Banner notification after adding an item to the cart reminds
                    customers to send orders to the kitchen
                  </li>
                  <li>
                    Banner notification once all ordered items have arrived
                    reminds customers to advance to checkout once ready
                  </li>
                </ul>
              </Text>
              <div className="bg-number">3</div>
            </Styled.StepText>
          </Styled.Step>
        </Styled.Steps>
        <Styled.SectionDivider>FINAL PRODUCT</Styled.SectionDivider>
        <Styled.SectionTitle>The final design</Styled.SectionTitle>
        <Styled.FinalGrid>
          <img src={Final1} />
          <img src={Final2} />
          <img src={Final3} />
          <img src={Final4} />
          <div />
          <img src={Final5} />
          <img src={Final6} />
          <div />
        </Styled.FinalGrid>
        <Styled.IFrame
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFbNKscKIuCFoyILERRtdZi%2Fmobile-app%253A-Dumpling-Delight%3Ftype%3Ddesign%26node-id%3D1023-10503%26t%3D6C3yBTd4y89fi7YC-1%26scaling%3Dscale-down%26page-id%3D1023%253A10502%26starting-point-node-id%3D1023%253A10503%26mode%3Ddesign"
          allowFullScreen
        />
        <Styled.SectionDivider>REFLECTIONS + NEXT STEPS</Styled.SectionDivider>
        <Styled.Reflections>
          <Styled.SectionTitle>
            My first experience undergoing the design process.
          </Styled.SectionTitle>
          <Text type="text-t5">
            Being my first UX project, I got to experience the complete design
            process for the first time. My biggest takeaways were:
          </Text>
          <Text type="text-t5">
            <ol>
              <li>
                <b>
                  The importance of user interviews and constant user feedback.
                </b>{' '}
                Many times I persuaded myself to wait for feedback once I had a
                “good enough” working prototype. However, I soon realized how
                invaluable feedback is at every stage of the design process.
                Looking back, each interview and round of testing brought me new
                insight about my users and gaps in my designs.
              </li>
              <li>
                <b>Simplicity is key.</b> Users want to complete tasks with as
                few obstacles and steps as possible. I discovered the importance
                of minimizing the number of clicks it takes users to achieve a
                goal, such as successfully ordering a menu item, without
                sacrificing necessary functionalities needed to create an
                easy-to-use, intuitive flow.
              </li>
              <li>
                <b>The iterative-nature of design.</b> Designs are never really
                complete after two or three iterations. Inevitably, they must be
                handed off to engineers and brought to life, but they
                continually evolve to meet new user needs. I learned to never be
                fully satisfied with my end product and seek continuous
                refinement.
              </li>
            </ol>
          </Text>
          <Styled.SectionTitle>
            If I had more time, I would...
          </Styled.SectionTitle>
          <Text type="text-t5">
            <ul>
              <li>
                <b>Conduct more usability tests.</b> Based on my #1 takeaway
                from this project, I believe conducting more usability studies
                would allow me to uncover new user pain points. In particular, I
                would investigate the efficacy and intuitiveness of the Split
                the Bill feature, which I added last to the app.
              </li>
              <li>
                <b>
                  Conduct interviews with real restaurant owners and workers.
                </b>{' '}
                I would like to understand what really goes on behind the scenes
                at a restaurant, specifically the process of completing an order
                from when it is received by the kitchen to when it reaches the
                customer&apos;s table. Insights from restaurants would also
                allow me to gauge the applicability of the app in the real
                world.
              </li>
            </ul>
          </Text>
        </Styled.Reflections>
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

const PlayPauseVideo = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef(null);

  return (
    <Styled.PlayPauseVideo
      width="243"
      height="auto"
      loop
      muted
      ref={vidRef}
      onClick={() => {
        if (playing) {
          vidRef.current.pause();
        } else {
          vidRef.current.play();
        }
        setPlaying(!playing);
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </Styled.PlayPauseVideo>
  );
};
