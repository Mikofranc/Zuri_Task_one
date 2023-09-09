const dayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const time = document.querySelector('[data-testid="currentUTCTime"]')
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

days.forEach((day,index)=>{
   
    if(index == new Date().getDay()){
        dayOfTheWeek.innerHTML ="Today is "+day
        }
    }
)
let dateMilliseconds =new Date().getUTCMilliseconds()

time.innerHTML=`Utc Milliseconds is ${dateMilliseconds}`