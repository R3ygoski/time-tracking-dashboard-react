import jeremyAvatar from './assets/images/image-jeremy.png'

import data from './assets/json/data.json'
import CardInfo from './components/CardInfo'

import iconExercise from './assets/images/icon-exercise.svg'
import iconPlay from './assets/images/icon-play.svg'
import iconStudy from './assets/images/icon-study.svg'
import iconWork from './assets/images/icon-work.svg'
import iconSocial from './assets/images/icon-social.svg'
import iconSelfCare from './assets/images/icon-self-care.svg'

import { useState } from 'react'

const iconObj = {
  'work': iconWork,
  'play': iconPlay,
  'study': iconStudy,
  'exercise': iconExercise,
  'social': iconSocial,
  'self care': iconSelfCare
}

const App = () => {

  const [date , setDate] = useState('weekly')

  let dateDynamic = date
  const dateList = {
    'daily': 'Day',
    'weekly': 'Week',
    'monthly': 'Month'
  }

  return (
    <main className='app'>
      <article className='app__user-card'>
        <div className='app__user-card__info'>
          <img className='app__user-card__info__avatar' src={jeremyAvatar} alt="Avatar"/>
          <p className='app__user-card__info__report'>Report for</p>
          <h1 className='app__user-card__info__name'>Jeremy Robson</h1>
        </div>
        <div className='app__user-card__menu'>
          <p onClick={()=>{setDate('daily')}} className={dateDynamic==='daily' ? 'active' : ''}>Daily</p>
          <p onClick={()=>{setDate('weekly')}} className={dateDynamic==='weekly' ? 'active' : ''}>Weekly</p>
          <p onClick={()=>{setDate('monthly')}} className={dateDynamic==='monthly' ? 'active' : ''}>Monthly</p>
        </div>
      </article>
      {data.map((item, index)=>(
        <CardInfo title={item.title} currentHours={`${item.timeframes[dateDynamic].current}`} previousHours={item.timeframes[dateDynamic].previous} date={dateList[dateDynamic]} key={index}>
          <img src={`${iconObj[item.title.toLowerCase()]}`} alt={item.title.toLowerCase()} aria-label='menu' role='menu'/>
        </CardInfo>
      ))}
    </main>
  )
}

export default App