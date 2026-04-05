import Pricing from "../components/Pricing";
import { PageHeader } from "./AboutPage";

const PricingPage = () => {
  return (
    <div className="page-fade-in">
      <PageHeader title="Our Packages" />
      <Pricing />
    </div>
  );
};

export default PricingPage;
