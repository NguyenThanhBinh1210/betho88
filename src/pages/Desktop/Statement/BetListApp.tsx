import PathRoudedIcon from '~/components/icons/PathRoudedIcon'
import PrinterIcon from '~/components/icons/PrinterIcon'

const BetListApp = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='font-medium text-textOpacity-200'>Bảng Cược</h2>
        <div className='flex items-center gap-1.5'>
          <button className='text-textOpacity-200 bg-background flex items-center justify-center w-6 h-6 rounded-sm border-[0.5px] border-screenBorder hover:bg-screenTab'>
            <PrinterIcon />
          </button>
          <button className='text-textOpacity-200 bg-background flex items-center justify-center w-6 h-6 rounded-sm border-[0.5px] border-screenBorder hover:bg-screenTab'>
            <PathRoudedIcon />
          </button>
        </div>
      </div>
      <div className='bg-screenBg-empty text-[13px] text-textOpacity-200 text-center py-3 my-2'>Không Có Thông Tin</div>
    </div>
  )
}

export default BetListApp
