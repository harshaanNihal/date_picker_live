import React , {useState} from 'react'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const WEEKS = [
  'sun','Mon','Tue','Wed','Thus','Fri','Sat'
]


const Header = ({month,year}) => (
  <div>
    <div>
      {month}
    </div>
    <div>
      <div>
         up
      </div>
      <div>
         {year}
      </div>
      <div>
        down
      </div>
    </div>
  </div>
)
function Calender() {
  const [date,setDate] = useState(0)
  const [month,setMonth] = useState(4)
  const [year,setYear] = useState(2022)

  const getDays = new Date(year,month,0).getDate() //24
  const startDate = new Date(year,month).getDay()

  const dateArray = new Array(getDays + 1).fill('').map((v,i) => i+1)

  console.log(getDays, startDate)


  return (


    <>
    <Header month={month} year={year} ></Header>
    <div className='grid'>


    <div className='weeks'>
    {WEEKS.map(v => <div>{v}</div>)}
    </div>
    <div className='dates'>
      {[...new Array(startDate).fill(' '),...dateArray].map(v => <div>{v}</div>)}
    </div>
    </div>
    </>
  )
}

export default Calender
