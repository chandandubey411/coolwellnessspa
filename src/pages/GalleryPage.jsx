import Gallery from "../components/Gallery";
import { PageHeader } from "./AboutPage";

const GalleryPage = () => {
  return (
    <div className="page-fade-in">
      <PageHeader title="Our Gallery" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
