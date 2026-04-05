import Services from "../components/Services";
import { PageHeader } from "./AboutPage";

const ServicesPage = () => {
  return (
    <div className="page-fade-in">
      <PageHeader title="Our Services" />
      <Services isPreview={false} />
    </div>
  );
};

export default ServicesPage;
