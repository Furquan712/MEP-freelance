/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'Clean Handover',
    text:
      'A project can be started by any MEP business in Dubai, but only a select handful can finish them on schedule. Urban Science gives you the opportunity to speak with past clients before your project even begins. In order for you to receive full feedback on URBAN SCIENCE. Our clean and on-time handover makes us among the best facilities management companies in Dubai.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: 'Qualified and Certified',
    text:
      'With growing urban development and opportunities in Dubai, many inexperienced players have also started working in the field of facilities management in Dubai. Therefore, whenever you start your work, please make sure to check that the company is certified and qualified enough to handle the project. At URBAN SCIENCE we have the most experienced team of facility management and MEP in Dubai. Our core team has been involved in a project like SOFITEL the palm, Mall of EMIRATES, and Dubai Airport..',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Experienced team',
    text:
      'THE ONLY SOURCE OF EXPERIENCE IS KNOWLEDGE. And this tough experience has made Urban Science what we are today. One of the best when it comes to MEP companies in Dubai and facility management companies in Dubai. Everyone calls themselves the best. But how do you choose the right company to perform your task? See their core team and you will get your answers.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} style={{position:'relative',overflow:'hidden'}} id="feature">
      <div style={styles.gradient}></div>
      <Container>
        <SectionHeader
           title="Why  Choose Us"
          slogan="“You cannot create the experience. You must undergo it”"
          
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn   sx={styles.featurecardcolumn}   data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
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

  featurecardcolumn:{
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
},
gradient:{
  width:"830px",
  height:"3000px",
  background: "linear-gradient(180deg, rgba(90, 107, 255, 0.476) 0%, rgba(169, 227, 255, 0) 100%)",
  transform: "rotate(75deg)",
  position: "absolute",
  top: '-197%',
  left:'110%',

},
   
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      marginLeft: '50px',
      padding: '38px',
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
