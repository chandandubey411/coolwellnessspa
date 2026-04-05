import Contact from "../components/Contact";
import { PageHeader } from "./AboutPage";

const ContactPage = () => {
  return (
    <div className="page-fade-in">
      <PageHeader title="Contact Us" />
      <Contact />
    </div>
  );
};

export default ContactPage;
