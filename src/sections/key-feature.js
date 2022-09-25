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
    title: 'Vector Editing',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: 'Customize & Monitoring',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Quality & Short-period',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} style={{position:'relative',overflow:'hidden'}} id="feature">
      <div style={styles.gradient}></div>
      <Container>
        <SectionHeader
           title="Why  Choose Us"
          slogan="Quality features"
          
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
