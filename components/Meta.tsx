import Head from "next/head";

const Meta: React.FC<{
  title?: string;
  keywords?: string;
  description?: string;
}> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Web Development News",
  keywords: "web development, programming, next js, typescript",
  description: "Get all the latest news from the world of web development",
};

export default Meta;
