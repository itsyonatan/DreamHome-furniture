import "./creativity.css"
import images from "../../data/images"
import data from "../../data/data"

export default function Creativity() {
  
  return(
    <div className="creativity container">
      <div className="creativity-content flexColCenter">
        <div className="left-creativity-content flexColStart ">
          <h1 className="creativity-header sectionText text-upper">creativity</h1>
          <h2 className="section-title sectionText">the creativity <br/> that defines you</h2>
          <p className="text">{data.creativity_1}</p>
          <button className="black-btn text-upper">shop now</button>
        </div>
        <div className="right-creativity-content">
          <img src={images.creativity} alt="creativityImage" />
        </div>
      </div>
    </div>
  )
}