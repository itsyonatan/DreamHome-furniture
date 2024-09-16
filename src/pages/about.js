import "./pages.css"
import Furniture from "../components/furniture/furniture"
import Creativity from "../components/creativity/creativity"
import Gallery from "../components/gallery/gallery"


export default function About() {

  return (
    <div className="about">
      <div className="page-header flexCenter">
        <div className="background-overlay"></div>
        <h1 className="page-title">about us</h1>
      </div>
      <Creativity />
      <Furniture />
      <Gallery />
    </div>
  )
}