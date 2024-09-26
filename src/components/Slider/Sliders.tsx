import Slider from 'react-slick'
import './Sliders.css'

interface SlideData {
  image: string
  name: string
}

interface SlidersProps {
  sliderData: SlideData[]
}

const Sliders: React.FC<SlidersProps> = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500
  }

  return (
    <Slider {...settings}>
      {sliderData.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt='slider' className='image' />
        </div>
      ))}
    </Slider>
  )
}

export default Sliders
