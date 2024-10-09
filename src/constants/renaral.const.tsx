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
import pplc from '~/assets/images/pplc.webp'
import wecasino from '~/assets/images/wecasino.webp'
import aesexy from '~/assets/images/aesexy.webp'
import allbet from '~/assets/images/allbet.webp'
import bbin from '~/assets/images/bbin.webp'
import bg from '~/assets/images/bg.webp'
import fgg from '~/assets/images/fgg.webp'
import ion from '~/assets/images/ion.webp'
import luxgaming from '~/assets/images/luxgaming.webp'
import sagaming from '~/assets/images/sagaming.webp'
import wm from '~/assets/images/wm.webp'
import yeebet from '~/assets/images/yeebet.webp'
import SBC_SabaClub from '~/assets/images/SBC_SabaClub.webp'
import SBC_SabaMobi from '~/assets/images/SBC_SabaMobi.webp'
import SBC_MegaKeno from '~/assets/images/SBC_MegaKeno.webp'
import rngkeno from '~/assets/images/rngkeno.webp'
import maxgame from '~/assets/images/maxgame.webp'
import lottery from '~/assets/images/lottery.webp'
import tablegame from '~/assets/images/tablegame.webp'
import lotterworld from '~/assets/images/lotterworld.webp'
import soccerlottery from '~/assets/images/soccerlottery.webp'
import nba from '~/assets/images/nba-lottery.webp'
import tennis from '~/assets/images/tennis-lottery.webp'
import cricket from '~/assets/images/cricket-lottery.webp'
import sport169 from '~/assets/images/sport-169-2.webp'

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
export const menuController2 = [
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
    title: 'Yêu thích',
    path: `/sport?s=2`,
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
    title: 'Thể thao',
    path: '/sport?s=3',
    icon: (
      <svg
        fill='currentColor'
        path='currentColor'
        stroke='currentColor'
        className='size-6 '
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 772.04 772.04'
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: '.a{fill:none;stroke-miterlimit:10;stroke-width:31.04px;}'
            }}
          />
        </defs>
        <circle className='a' cx='386.02' cy='386.02' r='370.5' />
        <path
          d='M619.5,466.5s5,97,48,141h130s22-144,29-159c0,0-89-68-108-86C718.5,362.5,624.5,433.5,619.5,466.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path d='M978,404l42-137s77-17,138,17c0,0,52,55,49,145l-109,83Z' transform='translate(-553.48 -102.48)' />
        <path d='M911,708l-10,96s46,38,136,27c0,0,55-17,102-88l-80-85Z' transform='translate(-553.48 -102.48)' />
        <path
          d='M697.87,207.63,752,240s73-61,162-51c0,0-7-33,46-71C960,118,786.73,113.26,697.87,207.63Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M1309.23,464.36S1288,498,1280,504c0,0-6,99-34,158,0,0,11.49,7,12.25,15.48C1258.25,677.48,1322.45,588.72,1309.23,464.36Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M571.41,446c4.36-2.34,9.11-2.89,13.73-2.84a41.51,41.51,0,0,1,25.41,9.74A30.46,30.46,0,0,1,619,464a53.58,53.58,0,0,1-6.72-1.69c-2.13-.58-4.08-1.35-6.1-1.95-3.91-1.41-7.71-2.75-11.45-4.22s-7.49-2.9-11.32-4.54c-1.91-.84-3.85-1.65-5.83-2.59S573.58,447.14,571.41,446Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M667.5,607.5c.45,10.61.15,21-.24,31.31s-1,20.59-1.78,30.84-1.49,20.48-2.43,30.74-1.73,20.53-3.28,31.06q-1.14-3.81-2-7.68c-.3-1.29-.61-2.58-.84-3.87l-.67-3.9c-.39-2.6-.85-5.21-1.1-7.82s-.52-5.24-.73-7.86a229.07,229.07,0,0,1,.11-31.44,252.43,252.43,0,0,1,4.19-31.11c1-5.13,2.24-10.24,3.67-15.29.72-2.53,1.48-5.05,2.33-7.55S666.46,610,667.5,607.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M756.43,810.68c12.83-.81,25.43-1.31,38-1.89s25.1-1.15,37.6-1.89c3.13-.16,6.26-.29,9.38-.56s6.25-.41,9.38-.57,6.24-.52,9.37-.7,6.26-.44,9.39-.72c12.57-.8,25.05-2.24,37.94-2.85-1.47.66-3,1.23-4.45,1.85l-4.5,1.72c-1.5.59-3,1.12-4.53,1.67s-3.06.94-4.59,1.42q-4.6,1.37-9.26,2.63c-1.55.43-3.12.73-4.68,1.1s-3.13.71-4.7,1l-4.72,1c-1.57.31-3.16.53-4.74.8-3.16.53-6.34,1-9.51,1.45s-6.38.68-9.56,1-6.39.51-9.59.71a269.08,269.08,0,0,1-38.41-.47C781.51,816.29,768.77,814.41,756.43,810.68Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M918.5,714.5c-12.42-7.87-24.12-16.57-35.59-25.51s-22.62-18.28-33.54-27.86-21.59-19.44-32-29.63-20.5-20.69-29.9-32c12.43,7.86,24.13,16.55,35.6,25.5s22.62,18.28,33.53,27.87,21.58,19.45,32,29.64S909.09,703.2,918.5,714.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M818.5,450.5c13.39-6.11,27.07-11.16,40.84-15.9s27.68-9,41.68-12.9,28.1-7.47,42.31-10.61,28.55-5.88,43.17-7.59c-13.38,6.12-27.06,11.18-40.83,15.91S918,428.39,904,432.3s-28.1,7.46-42.32,10.6S833.11,448.78,818.5,450.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M1094.4,508.76a415.14,415.14,0,0,1-4.76,41.86q-3.32,20.73-7.82,41.19t-10.12,40.68a411.37,411.37,0,0,1-13.2,40,412.26,412.26,0,0,1,4.75-41.86q3.32-20.73,7.83-41.19t10.14-40.68A418.56,418.56,0,0,1,1094.4,508.76Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M1134.5,738.5c9.92-7,20-13.35,30.14-19.65l30.22-18.65c10-6.25,19.92-12.52,29.44-19.3,4.77-3.38,9.47-6.86,13.9-10.66a79.94,79.94,0,0,0,12.3-12.74q-.3,1.1-.66,2.19c-.25.71-.43,1.49-.75,2.18-.63,1.39-1.19,2.86-2,4.2s-1.48,2.73-2.33,4-1.71,2.59-2.63,3.83a101.23,101.23,0,0,1-12.38,13.68,156.47,156.47,0,0,1-14.07,11.71c-1.2.94-2.45,1.8-3.69,2.68s-2.47,1.76-3.73,2.61c-2.53,1.68-5.07,3.34-7.63,4.95a267.33,267.33,0,0,1-32,16.93c-5.52,2.44-11.1,4.72-16.79,6.76A158.42,158.42,0,0,1,1134.5,738.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M1207.5,428.5a112.07,112.07,0,0,1,13,6.9c4.18,2.53,8.22,5.25,12.18,8.09a204.3,204.3,0,0,1,22.36,18.78,156.78,156.78,0,0,1,19.21,22.27,98.38,98.38,0,0,1,7.6,12.79,48.21,48.21,0,0,1,4.64,14.17,129.85,129.85,0,0,0-9.13-11.17c-3.19-3.51-6.46-6.91-9.77-10.27-6.63-6.72-13.43-13.28-20.22-19.91s-13.6-13.28-20.31-20.13S1213.72,436.18,1207.5,428.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M1153.5,287.5a188.55,188.55,0,0,1,10-18.27c3.51-5.79,7.1-11.42,10.6-17s6.93-11.17,10-16.88c1.54-2.86,3-5.77,4.25-8.79a49.21,49.21,0,0,0,3.06-9.73,23.62,23.62,0,0,1,2.26,10.72,44,44,0,0,1-1.5,10.91,71.92,71.92,0,0,1-8.77,19.6,96,96,0,0,1-13.14,16.51,89,89,0,0,1-7.85,7A57.77,57.77,0,0,1,1153.5,287.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M1019.5,266.5a305.19,305.19,0,0,1-30.9-18.6q-14.86-10.05-29-21.06t-27.53-22.93A300.66,300.66,0,0,1,906.5,178.5a300.55,300.55,0,0,1,30.91,18.59q14.87,10,29,21.07T993.9,241.1A302.13,302.13,0,0,1,1019.5,266.5Z'
          transform='translate(-553.48 -102.48)'
        />
        <path
          d='M756.43,236.56a223.21,223.21,0,0,0-16.95,31.25,196,196,0,0,0-11.36,32.78c-1.45,5.58-2.54,11.25-3.43,17s-1.48,11.49-2,17.3a352.26,352.26,0,0,0-.22,35.65,107.93,107.93,0,0,1-8.42-35.65,117.54,117.54,0,0,1,.25-18.57l.21-2.32.31-2.31c.22-1.53.41-3.08.66-4.61.59-3.05,1.17-6.11,1.94-9.12a119.81,119.81,0,0,1,14.42-34.16,111.25,111.25,0,0,1,11-14.85c2-2.3,4.18-4.51,6.43-6.59A58.13,58.13,0,0,1,756.43,236.56Z'
          transform='translate(-553.48 -102.48)'
        />
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

export const casinoLiveList = [
  {
    path: '/',
    img: pplc,
    title: 'PP Live Casino'
  },
  {
    path: '/',
    img: wecasino,
    title: 'WE Live Casino'
  },
  {
    path: '/',
    img: aesexy,
    title: 'AE Sexy'
  },
  {
    path: '/',
    img: allbet,
    title: 'Allbet'
  },
  {
    path: '/',
    img: bbin,
    title: 'BBIN'
  },
  {
    path: '/',
    img: bg,
    title: 'BG'
  },
  {
    path: '/',
    img: fgg,
    title: 'FGG'
  },
  {
    path: '/',
    img: ion,
    title: 'ION'
  },
  {
    path: '/',
    img: luxgaming,
    title: 'Lux Gaming'
  },
  {
    path: '/',
    img: sagaming,
    title: 'SA Gaming'
  },
  {
    path: '/',
    img: wm,
    title: 'WM'
  },
  {
    path: '/',
    img: yeebet,
    title: 'Yee Bet'
  }
]
export const sabaList = [
  {
    path: '/',
    img: SBC_SabaClub,
    title: 'Sảnh SABA.club'
  },
  {
    path: '/',
    img: SBC_SabaMobi,
    title: 'Sảnh SABA.mobi'
  },
  {
    path: '/',
    img: SBC_MegaKeno,
    title: 'Mega Keno'
  }
]
export const kenoList = [
  {
    path: '/',
    img: rngkeno,
    title: 'RNG Keno'
  },
  {
    path: '/',
    img: maxgame,
    title: 'MaxGame'
  },
  {
    path: '/',
    img: lottery,
    title: 'Xổ số'
  },
  {
    path: '/',
    img: tablegame,
    title: 'Trò chơi trên bàn'
  },
  {
    path: '/',
    img: lotterworld,
    title: 'Lucky 3D'
  }
]
export const xosoSportList = [
  {
    path: '/',
    img: soccerlottery,
    title: 'Xổ số Bóng đá'
  },
  {
    path: '/',
    img: nba,
    title: 'Xổ Số NBA'
  },
  {
    path: '/',
    img: tennis,
    title: 'Xổ Số Quần Vợt'
  },
  {
    path: '/',
    img: cricket,
    title: 'Xổ số Cricket'
  },
  {
    path: '/',
    img: sport169,
    title: 'Xổ Số Thể Thao Điện Tử'
  }
]
