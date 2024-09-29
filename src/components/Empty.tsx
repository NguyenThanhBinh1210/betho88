
const Empty = () => {
  return (
    <div className=' pb-4 rounded text-sm  bg-[#212a31] text-white py-3'>
      <svg
        className='mx-auto'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
        id='圖層_1'
        x='0px'
        y='0px'
        width='200px'
        height='200px'
        viewBox='0 0 200 200'
        enableBackground='new 0 0 200 200'
        xmlSpace='preserve'
      >
        <g>
          <path
            fill='#3f505e'
            d='M200,100c0,55.224-44.776,100-100,100C44.776,200,0,155.224,0,100C0,44.776,44.776,0,100,0   C155.224,0,200,44.776,200,100'
          />
          <path
            opacity='0.54'
            d='M43.927,94.623l-9.288,9.288c-1.563,1.563-1.563,4.095,0,5.657s4.094,1.563,5.656,0l9.289-9.289   c1.562-1.561,1.562-4.093,0-5.656C48.022,93.06,45.49,93.06,43.927,94.623z M44.584,88.208c0.724-0.723,1.171-1.723,1.171-2.828   c0.001-2.208-1.791-4-3.999-4l-12.031,0.001c-2.208-0.001-4,1.791-4,4c0,2.21,1.791,3.999,4,3.999h12.031   C42.861,89.38,43.861,88.932,44.584,88.208z M40.297,61.194c-1.561-1.561-4.095-1.561-5.658,0c-1.561,1.563-1.561,4.095,0,5.658   l9.289,9.289c1.563,1.563,4.095,1.563,5.658,0c1.561-1.563,1.563-4.095,0-5.658L40.297,61.194z M29.533,60.006   c2.094,0,3.79-1.696,3.79-3.79s-1.696-3.791-3.79-3.791s-3.791,1.697-3.791,3.791S27.439,60.006,29.533,60.006z M167.418,106.884   c-6.398-6.398-4.629-4.626-4.362-4.36l-6.732-6.734h-0.003l-0.02-0.022l-30.206-30.206l-18.743-18.742c0,0-6.737-6.86-13.49-0.106   C87.108,53.465,83.47,57.1,83.47,57.1l3.393,3.41c1.684,1.684,2.023,2.548,2.023,5.18c0,5.255-3.669,8.93-8.922,8.93   c-2.63,0.001-3.499-0.341-5.19-2.031l-3.394-3.389c0,0-3.5,3.498-10.298,10.294c-6.798,6.798-0.001,13.595-0.001,13.595   l60.136,60.131c0,0,6.759,6.84,13.595,0.004c6.837-6.837,10.289-10.301,10.289-10.301l-3.387-3.395   c-1.69-1.691-2.032-2.56-2.032-5.191c0.001-5.251,3.674-8.92,8.93-8.92c2.631,0,3.497,0.34,5.185,2.023l3.399,3.396l10.292-10.289   C167.488,120.547,174.276,113.743,167.418,106.884z M67.877,86.289l3.913-3.906c2.294,1.292,4.831,1.853,8.174,1.853   c10.569,0,18.535-7.973,18.535-18.546c0.001-3.344-0.56-5.875-1.853-8.167l3.908-3.91l15.844,15.844l-32.677,32.676L67.877,86.289z    M156.78,117.656c-2.289-1.293-4.823-1.854-8.17-1.854c-10.571,0-18.543,7.968-18.543,18.537c0,3.345,0.562,5.881,1.855,8.17   l-3.908,3.916l-37.3-37.3l32.676-32.674l37.302,37.3L156.78,117.656z'
          />
        </g>
      </svg>
      <p className='text-xl font-medium text-center mb-2 mt-4'>Không có Cược nào đang mở</p>
      <p className='text-gray-300 text-base text-center mt-5'>
        Nhấn vào nút bên dưới để quay trở về trang trước và bắt đầu cá cược.
      </p>
      <button className='bg-[#0a3a5c] block mx-auto rounded py-2 px-14 mt-4 text-base'>Quay lại</button>
    </div>
  )
}

export default Empty