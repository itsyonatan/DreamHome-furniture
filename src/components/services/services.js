import "./services.css"
import images from "../../data/images"

export default function Services() {
  
  return(
    <div className="services container">
      <p className="services-header sectionText text-center">your best choose dream home</p>
      <div className="services-content flexColStart">
        <div className="service-item ">
          <img src={images.icons.delivery} alt="delivery-image" />
          <p className="service-text">fast delivery</p>
        </div>
        <div className="service-item ">
          <img src={images.icons.quality} alt="delivery-image" />
          <p className="service-text">quality production</p>
        </div>
        <div className="service-item ">
          <img src={images.icons.refund} alt="delivery-image" />
          <p className="service-text">free returns</p>
        </div>
        <div className="service-item ">
          <img src={images.icons.tracking} alt="delivery-image" />
          <p className="service-text">order tracking </p>
        </div>
        <div className="service-item ">
          <img src={images.icons.support} alt="delivery-image" />
          <p className="service-text">24/7 support</p>
        </div>
      </div>
    </div>
  )
}