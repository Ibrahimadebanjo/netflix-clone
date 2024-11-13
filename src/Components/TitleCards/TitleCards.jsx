import  { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'
import cards_data from "../../assets/cards/Cards_data"
const TitleCards = ({title, category}) => {
  const[apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDgwNWIxYmQ2YjZkYTA5MTRjNDI4MjZhZmJmZGU0MiIsIm5iZiI6MTczMTI2NTAwNC4wOTQwNDY4LCJzdWIiOiI2NzMwZmIwYTBkMTMzY2Q0NzMzMjU3NDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TJ6RKUG0ZMfC0U-OC26vl9wX_N6_7PYerUv7E8cr8zA'
    }
  };
  

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results ))
    .catch(err => console.error(err));
cardsRef.current.addEventListener("wheel", (e)=>{
  e.preventDefault;
  cardsRef.current.scrollLeft += e.deltaY
})
  },[])
  return (
    <div className='title-cards'>
<h2> {title ? title : 'Popular On Netflix' }</h2>
<div className="card-list" ref={cardsRef}>
  {apiData.map((card,index)=> {
    return <Link to={`/player/${card.id}`} className="card" key={index}>
      <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" /> 
      <p>{card.original_title}</p>
    </Link>
  } )}
</div>
    </div>
  )
}

export default TitleCards