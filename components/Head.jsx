import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="arun kumar is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="arun kumar, Arun, web developer portfolio, Arun web developer, Arun developer, mern stack, arun kumar portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="arun kumar's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <meta property="og:image" content="https://imgur.com/josqqu4.png" />
      <meta property="og:url" content="https://ak-code.vercel.app/" />
      <meta name="twitter:card" content="summary_large_img" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Arun Kumar',
};
