import React from "react"
import "../props/card.css"
import NetflixCard from "./NetflixCard"
import AmazonCard from "./AmazonCard"

// console.log(SeriesData);
function getValue(){
	let inpValue = document.getElementById('userVal').value
	// console.log(inpValue);
	// finalValue = inpValue+=favSeries
	
}
const favSeries = user;
console.log(favSeries);

const FETCHDATA__FROM__SERIESDATA = () => {
	
  /* if (favSeries === "netflix") {
    return <NetflixCard />
  }else {
	return <AmazonCard/>
  } */

  return (favSeries === 'netflix') ?  <NetflixCard /> :  <AmazonCard />
}  

const ConditionalApp =()=>{
	
	return(
		<>
			<h1 className="heading_name">my favorite top 5 netflix series</h1>
			<input type="text"  id="userVal" />
			<button type="button" onClick={getValue}>Click Me</button>
			<FETCHDATA__FROM__SERIESDATA/>
		</>
	)


}
export default ConditionalApp
// export {fetchData__from__SeriesData}
