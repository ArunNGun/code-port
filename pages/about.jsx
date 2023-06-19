const AboutPage = () => {
  return (
    <>
      <h3>Hi, I am Arun Kumar. A Digital Craftsman & Creative Engineer creating digital experiences with an eye for design and creative solutions.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
