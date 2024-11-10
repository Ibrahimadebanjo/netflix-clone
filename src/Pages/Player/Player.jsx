import backarrow from "../../assets/back_arrow_icon.png"
import './Player.css'
const Player = () => {
  return (
    <div className="player">
<img src={backarrow} alt="" />
<iframe src="https://www.youtube.com/embed/5MgBikgcWnY?si=LzAmpCyikkKYlInJ" 
title="trailer" frameBorder="0" allowFullScreen width="90%" height="90%">
<div className="player-info">
  <p>Published date</p>
  <p>Name</p>
  <p>Type</p>
</div>
</iframe>
    </div>
  )
}

export default Player