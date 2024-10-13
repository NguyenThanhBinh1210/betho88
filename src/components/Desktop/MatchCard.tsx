const MatchCard = () => {
  return (
    <div className='rounded cursor-pointer border border-borderColor-1000 hover:border-textActive overflow-hidden p-1 h-40 w-[325px] relative'>
      <div
        className='absolute bg-primary/40  top-0 left-0 w-full h-full'
        style={{ transform: 'skew(-31deg) translate(-64%, 0%)' }}
      ></div>
      <div className='relative'>
        <div className='w-full flex items-center'>
          <div className='h-[0.5px] w-[75px] -translate-y-0.5 bg-borderColor'></div>
          <p className='uppercase font-light text-textOpacity-800  pb-1 mx-auto text-center leading-7 w-[160px] line-clamp-1'>
            Cúp Quốc gia thuỵ điển
          </p>
          <div className='h-[0.5px] w-[75px] -translate-y-0.5 bg-borderColor'></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='w-[114.48px] text-center text-xs text-textOpacity-800'>Vasas Kubala Akademia U19</div>
          <div className='text-center leading-4'>
            <p className='uppercase text-textLive'>Trực tiếp</p>
            <p className='text-textOpacity-800'>12:00AM</p>
          </div>
          <div className='w-[114.48px] text-center text-xs text-textOpacity-800'>FC Jarasdasd</div>
        </div>
        <div className='grid grid-cols-2 gap-1.5 mt-2 px-2'>
          <div className='space-y-1'>
            <p className='font-medium text-textOpacity-800 text-center '>Cược chấp</p>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className='uppercase'>H</p>
                  <p className='uppercase'>+3.66</p>
                </div>
                <div className='font-medium text-textOpacity-800'>0.65</div>
              </div>
            </div>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className='uppercase'>A</p>
                  <p className='uppercase '>-3.66</p>
                </div>
                <div className='font-medium text-textDanger'>0.65</div>
              </div>
            </div>
          </div>
          <div className='space-y-1'>
            <p className='font-medium text-textOpacity-800 text-center '>Tài/Xỉu</p>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className=''>o</p>
                  <p className='uppercase'>3.66</p>
                </div>
                <div className='font-medium text-textDanger '>0.65</div>
              </div>
            </div>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className=''>u</p>
                  <p className='uppercase '>3.66</p>
                </div>
                <div className='font-medium text-textOpacity-800'>0.65</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
