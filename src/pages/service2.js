import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import ContactSec from "sections/service2-sec";

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 004" />
          <ContactSec />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}