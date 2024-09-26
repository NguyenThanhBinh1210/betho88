import HomeResults from '~/components/HomeResults'
import Sliders from '~/components/Slider/Sliders'

const Home = () => {
  const data = [
    {
      name: 'One',
      image:
        'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_723.jpg?v=20240920115804'
    },
    {
      name: 'Two',
      image:
        'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_735.jpg?v=20240920115804'
    },
    {
      name: 'Three',
      image:
        'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_731.jpg?v=20240920115804'
    },
    {
      name: 'Four',
      image:
        'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_730.jpg?v=20240920115804'
    },
    {
      name: 'Five',
      image:
        'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_728.jpg?v=20240920115804'
    }
  ]

  return (
    <div className='text-white'>
      <div className='max-w-[1342px] w-full mx-auto px-2 2xl:px-0'>
        <Sliders sliderData={data} />
        <HomeResults />
      </div>
    </div>
  )
}

export default Home
