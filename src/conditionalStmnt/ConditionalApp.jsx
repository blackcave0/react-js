import React from "react"
import "../props/card.css"
import NetflixCard from "./NetflixCard"
import AmazonCard from "./AmazonCard"
import { useState } from "react"
import PropsApp from "../props/PropsApp"

// console.log(SeriesData);
/* function getValue(){
	let inpValue = document.getElementById('userVal').value
	// console.log(inpValue);
	// finalValue = inpValue+=favSeries
	return inpValue
}
*/

// const favSeries = 'netflix';
// console.log(favSeries);

// const FETCHDATA__FROM__SERIESDATA = () => {
	
  /* if (favSeries === "netflix") {
    return <NetflixCard />
  }else {
	return <AmazonCard/>
  } */

//   return (favSeries === 'netflix') ?  <NetflixCard /> :  <AmazonCard />
// }  


const ConditionalApp =()=>{
	// Storting input value from input tag or user 
	const [inputValue, updateValue] = useState('');

	const onChangeInput =(e)=>{
		updateValue(e.target.value)
		// console.log(e.target.value);
	}

	
	const [finalValue, newValue] = useState('');
	const getValue =()=>{
		// console.log(inputValue);
		newValue(inputValue)
		
	}

	const myfavSeries = finalValue;

	const FavSeries =()=>{
		/* return (myfavSeries === 'netflix') ?  <NetflixCard /> :  <AmazonCard /> */
		if(myfavSeries === 'netflix') {
			return (
				<NetflixCard/>
			)
		}else if (myfavSeries === 'amazon') {
			return(
				<AmazonCard/>
			)
		}
		else {
			return (
				<PropsApp/>
			)
		}
	}
	return(
		<>
			{/* <h1 className="heading_name">my favorite top 5 netflix series</h1> */}
			<input type="text"  onChange={onChangeInput} value={inputValue} />
			<button type="button" onClick={getValue}>Click Me</button>
			<FavSeries/>
			{/* <FETCHDATA__FROM__SERIESDATA/> */}
		</>
	)


}
export default ConditionalApp
// export {fetchData__from__SeriesData}
