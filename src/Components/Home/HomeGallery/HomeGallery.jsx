import "./HomeGallery.css";
import logo from "../../../imgs/main-logo.png";
import gallery1 from "../../../imgs/gallery/gallery1.jpg";
import gallery2 from "../../../imgs/gallery/gallery2.jpg";
import gallery3 from "../../../imgs/gallery/gallery3.webp";
import gallery4 from "../../../imgs/gallery/gallery4.jpg";
import gallery5 from "../../../imgs/gallery/gallery5.webp";

const HomeGallery = () => {
  return (
    <div className="gallery-parent">
      <div className="gallery-title">
        <img src={logo} className="title-img" />
        <p>en fotografías</p>
      </div>
      <section className="gallery-background">
        <img className="gallery-img-first" src={gallery1} />

        <img className="gallery-img" src={gallery2} />

        <img className="gallery-img" src={gallery3} />

        <img className="gallery-img" src={gallery4} />

        <img className="gallery-img" src={gallery5} />
      </section>
    </div>
  );
};

export default HomeGallery;
