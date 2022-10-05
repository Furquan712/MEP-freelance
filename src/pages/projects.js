import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import ContactSec from "sections/contact-sec";
import ProjectSec from "sections/project-sec";

export default function Project() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 004" />
          <ProjectSec />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
