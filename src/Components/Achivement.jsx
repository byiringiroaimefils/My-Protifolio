import achivementData from "./AchivementData"
export default function Achivement() {
  return (
    <div className="Container">
      <div>
        {achivementData.map( item => {
           <div className="box" key={item.id}>
              <img src={item.Image}/>
              <p>{item.alt}</p>
           </div>
        })}
      </div>
    </div>
  )
}
