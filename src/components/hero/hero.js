import './hero.css'

export default function Hero() {
  
  return(
    <div className='hero container'>
      <div className='hero-content'>
        <div className='left-content text-center flexColCenter paddings'>
          <h1 className="hero-title">The Best Italian Furniture Template</h1>
          <p className="text hero-text">The “DreamHome” demo by OceanWP is a stunning full website template that showcases the best of of your furniture offer or just any products you sell. It has a sleek, minimalistic and modern look, making it ideal for any furniture or home décor business seeking to create a stylish and professional online presence.</p>
          <button className="white-btn">SHOP NOW</button>
        </div>
        <div className="right-content"></div>
      </div>
    </div>
  )
}