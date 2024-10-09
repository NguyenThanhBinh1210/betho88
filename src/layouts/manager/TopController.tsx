import CurrentPageButton from '~/components/CurrentPageButton'
import HanMucButton from '~/components/HanMucButton'

const TopController = () => {
  return (
    <div className='flex justify-between bg-[#0a3a5c]'>
      <div className='flex items-center gap-2 '>
        <CurrentPageButton />
      </div>
      <HanMucButton />
    </div>
  )
}

export default TopController
