import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import ServiceSec from "sections/service3-sec";

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 004" />
          <ServiceSec/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}