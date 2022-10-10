/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Smart Features',
    text:
      'A project can be started by any MEP business in Dubai, but only a select handful can finish them on schedule. Urban Science gives you the opportunity to speak with past clients before your project even begins. In order for you to receive full feedback on URBAN SCIENCE. Our clean and on-time handover makes us among the best facilities management companies in Dubai.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Fast Performance',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'Unlimited Content',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Unlimited Customization',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Boost Productivity',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature'}}>
       
      <Container>
        <SectionHeader
          title="Why  Choose Us"
          slogan="“You cannot create the experience. You must undergo it”"
        />
         <p>
        The MEP division of Urban Science is managed by a team of highly qualified service engineers with 18 years of experience in the field of facility management and MEP works. This experience of our team makes us one of the leading facility management companies in Dubai. Our core team has been thoroughly exposed to projects such as Dubai airport, Mall of Emirates, PALM the Sofitel, and residential towers. We are there for you at all times, from planning it out on paper to providing the services.
        </p>
        <Grid sx={styles.grid} >
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
     
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
