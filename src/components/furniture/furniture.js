import "./furniture.css"
import images from "../../data/images"
import data from "../../data/data"

export default function Furniture() {
  
  return(
    <div className="furniture container">
      <div className="furniture-content flexColCenter">
        <div className="left-furniture-content flexColStart">
          <h2 className="furniture-sub-header section-title sectionText">the furniture <br/> that defines you
          <span className="furniture-header sectionText text-upper">Furniture</span>
          </h2>
          <p className="text">{data.furniture_1}</p>
          <p className="text">{data.furniture_2}</p>
          <button className="black-btn text-upper">shop now</button>
        </div>
        <div className="right-furniture-content">
          <img src={images.furniture} alt="furnitureImage" />
        </div>
      </div>
    </div>
  )
}