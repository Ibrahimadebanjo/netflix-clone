import { useEffect, useState } from "react";
import backarrow from "../../assets/back_arrow_icon.png"
import './Player.css'
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const navigate = useNavigate()
  const {id} = useParams();
const[apiData, setApiData] = useState({
  name: "",
  key: "",
  published_at: "",
  type: "",
})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDgwNWIxYmQ2YjZkYTA5MTRjNDI4MjZhZmJmZGU0MiIsIm5iZiI6MTczMTUwNTIyNi4xMzk0MjY1LCJzdWIiOiI2NzMwZmIwYTBkMTMzY2Q0NzMzMjU3NDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2ewq4PBzp2nQdr02_u8X7khixWoEOsjLLiVwN_84KrU'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div className="player">
<img src={backarrow} alt="" onClick={()=> {navigate(-2)}} />
<iframe src={`https://www.youtube.com/embed/${apiData.key}`}
title="trailer" frameBorder="0" allowFullScreen width="90%" height="90%">
</iframe>
<div className="player-info">
  <p>{apiData.published_at.slice(0,10)}</p>
  <p>{apiData.name}</p>
  <p>{apiData.type}</p>
</div>
    </div>
  )
}

export default Player