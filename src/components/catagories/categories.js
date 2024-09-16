import "./categories.css"
import images from "../../data/images"

export default function Categories() {

  return (
    <div className="categories container flexCenter">
      <div className="background-overlay"></div>
      <div className="categories-content flexColCenter">
        <div className="categories-header flexColCenter">
          <p className="sectionText categories-title">featured categories</p>
          <p className="categories-sub-header text-cap">unique & inspiring crafting</p>
        </div>
        <div className="catagory-items flexColCenter">
          <div className="category flexColCenter">
            <img src={images.decoration} alt="decoration-image" />
            <p className="catagory-title text-cap">decoration</p>
          </div>
          <div className="category flexColCenter">
            <img src={images.lexury} alt="lexury-image" />
            <p className="catagory-title text-cap">lexury</p>
          </div>
          <div className="category flexColCenter">
            <img src={images.indoor} alt="indoor-image" />
            <p className="catagory-title text-cap">indoor</p>
          </div>
        </div>
      </div>
    </div>
  )
}