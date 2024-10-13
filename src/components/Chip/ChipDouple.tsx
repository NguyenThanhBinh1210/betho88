const ChipDouple = ({ ratio, value, disable }: { ratio: string; value: string; disable?: boolean }) => {
  return (
    <div
      className={`border-selectHover bg-gradient-to-b ${
        disable
          ? 'text-textOpacity-300'
          : 'hover:from-primary/80 hover:to-secondary hover:bg-gradient-to-br font-semibold'
      }  transition-background  from-secondary to-primary/80 border rounded py-1 cursor-pointer px-1.5 flex justify-between items-center `}
    >
      <span className=' font-medium  text-textOpacity-100'>{ratio}</span>
      <span className='  text-textOpacity-800'>{!disable ? value : '--'}</span>
    </div>
  )
}

export default ChipDouple
