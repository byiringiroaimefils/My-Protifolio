import achivementData from "./AchivementData"
export default function Achivement() {
  return (
    <div className="Container flex gap-10">
      {achivementData.map( item => (
           <div className="text-white" key={item.id}>
              <img src={item.Image} className="w-96"/>
              <p className="w-80">{item.alt}</p>
           </div>
        ))} 
    </div>
  )
}
