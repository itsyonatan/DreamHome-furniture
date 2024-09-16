import Categories from "../components/catagories/categories"
import Creativity from "../components/creativity/creativity"
import Furniture from "../components/furniture/furniture"
import Gallery from "../components/gallery/gallery"
import Hero from "../components/hero/hero"
import Services from "../components/services/services"
import Testimonials from "../components/testimonials/testimonials"

export default function Home() {
  
  return(
    <div className="home">
      <Hero />
      <Furniture />
      <Creativity />
      <Categories />
      <Testimonials />
      <Services />
      <Gallery />
    </div>
  )
}