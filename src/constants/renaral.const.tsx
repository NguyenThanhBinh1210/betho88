import image1 from '~/assets/images/thethao.png'
import image2 from '~/assets/images/theothaoao.png'
import image3 from '~/assets/images/thethaodientu.png'
import image4 from '~/assets/images/numbergame.png'
import image5 from '~/assets/images/trochoi.png'
import image6 from '~/assets/images/RNGKeno_desktop.png'
import image7 from '~/assets/images/Saba.club_desktop.png'

import sports_tab from '~/assets/icons/sports_tab.png'
import saba_club_tab from '~/assets/icons/saba_club_tab.png'
import saba_pingoal_tab from '~/assets/icons/saba_pingoal_tab.png'
import esports_tab from '~/assets/icons/esports_tab.png'
import live_casino_tab from '~/assets/icons/live_casino_tab.png'
import numbergame_tab from '~/assets/icons/numbergame_tab.png'
import lottery_tab from '~/assets/icons/lottery_tab.png'
import casino_tab from '~/assets/icons/casino_tab.png'
import virtual_sports from '~/assets/icons/virtual_sports.png'
import SportTab from '~/modules/SportTab'
import SoccerCard from '~/components/Sports/SoccerCard'
import BasketballCard from '~/components/Sports/BasketballCard'
import EsportCard from '~/components/Sports/EsportCard'
import SabaGameTab from '~/modules/SabaGameTab'
import SabaPinGoalTab from '~/modules/SabaPinGoalTab'
import EsportTab from '~/modules/EsportTab'
export const menuItems = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'web design',
        url: 'web-design'
      },
      {
        title: 'web development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend'
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node'
              },
              {
                title: 'PHP',
                url: 'php'
              }
            ]
          }
        ]
      },
      {
        title: 'SEO',
        url: 'seo'
      }
    ]
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are'
      },
      {
        title: 'Our values',
        url: 'our-values'
      }
    ]
  }
]

export const menu = [
  {
    image: image1,
    title: 'Thể thao',
    path: ''
  },
  {
    image: image2,
    title: 'Thể thao ảo',
    path: ''
  },
  {
    image: image3,
    title: 'Thể thao điện tử',
    path: ''
  },
  {
    image: image4,
    title: 'Number Game',
    path: ''
  },
  {
    image: image5,
    title: 'Trò chơi',
    path: ''
  },
  {
    image: image6,
    title: 'RNG Keno',
    path: ''
  },
  {
    image: image7,
    title: 'Cổng game SABA',
    path: ''
  }
]

export const menuController = [
  {
    title: 'Trang chủ',
    path: '/lobby',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
        <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
        <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
      </svg>
    )
  },
  {
    title: 'Tỉ số',
    path: '/ratio',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
        <path
          fillRule='evenodd'
          d='M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z'
          clipRule='evenodd'
        />
        <path d='M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z' />
      </svg>
    )
  },
  {
    title: 'Sao kê',
    path: '/statement',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
        <path
          fillRule='evenodd'
          d='M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z'
          clipRule='evenodd'
        />
        <path d='M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z' />
      </svg>
    )
  },
  {
    title: 'Kết quả',
    path: '/result',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
        <path
          fillRule='evenodd'
          d='M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z'
          clipRule='evenodd'
        />
        <path d='M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z' />
      </svg>
    )
  },
  {
    title: 'Tôi',
    path: '/profile',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
        <path
          fillRule='evenodd'
          d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
          clipRule='evenodd'
        />
      </svg>
    )
  }
]

export const tabList = [
  {
    title: 'Thể thao',
    img: sports_tab,
    key: 'the-thao',
    content: <SportTab />
  },
  {
    title: 'Cổng game SABA',
    img: saba_club_tab,
    key: 'cong-game-saba',
    content: <SabaGameTab />
  },
  {
    title: 'Saba PinGoal',
    img: saba_pingoal_tab,
    key: 'saba-pingoal',
    content: <SabaPinGoalTab />
  },
  {
    title: 'Thể thao điện tử',
    img: esports_tab,
    key: 'the-tha-dien-tu',
    content: <EsportTab />
  },
  {
    title: 'Casino trực tuyến',
    img: live_casino_tab,
    key: 'casino-truc-tuyen'
  },
  {
    title: 'Number Game',
    img: numbergame_tab,
    key: 'number-game'
  },
  {
    title: 'Keno Xổ số',
    img: lottery_tab,
    key: 'keno-xo-so'
  },
  {
    title: 'Sòng bạc',
    img: casino_tab,
    key: 'song-bac'
  },
  {
    title: 'Thể thao ảo',
    img: virtual_sports,
    key: 'the-thao-ao'
  }
]

export const sportTab = [
  {
    title: 'Phổ biến',
    description: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6 text-red-600'>
        <path
          fillRule='evenodd'
          d='M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z'
          clipRule='evenodd'
        />
      </svg>
    ),
    key: 'popular',
    content: (
      <>
        <SoccerCard value='44' />
        <BasketballCard value='12' />
        <EsportCard value='435' />
        <SoccerCard value='44' />
        <BasketballCard value='12' />
        <EsportCard value='435' />
        <SoccerCard value='44' />
        <BasketballCard value='12' />
        <EsportCard value='435' />
        <SoccerCard value='44' />
        <BasketballCard value='12' />
        <EsportCard value='435' />
      </>
    )
  },
  {
    title: 'Trực tiếp',
    description: '181',
    key: 'live'
  },
  {
    title: 'Sắp diễn ra',
    description: '181',
    key: 'coming-soon'
  },
  {
    title: 'Hôm nay',
    description: '181',
    key: 'now'
  },
  {
    title: 'Sớm',
    description: '181',
    key: 'early'
  },
  {
    title: 'Cược xiên',
    description: '181',
    key: 'early-2'
  },
  {
    title: 'Cược thắng',
    description: '181',
    key: 'early-4'
  },
  {
    description: '',
    title: 'Tiêu chuẩn',
    key: 'early-3'
  }
]
