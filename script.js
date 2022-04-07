
const btn = document.getElementById('btn');

btn.addEventListener('click',function(e){
e.preventDefault()	
const Country = document.getElementById('_select').value
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com',
		'X-RapidAPI-Key': '9abf0c94eemshaf9de469fa58961p13c3b5jsnee11c7069bb2'
	}
};

fetch('https://covid-19-tracking.p.rapidapi.com/v1/' + Country, options)
	.then(response => response.json())
	.then((response)=>{
		document.getElementById('activeCase').innerHTML = response['Active Cases_text']
		document.getElementById('newCase').innerHTML = response['New Cases_text']
		document.getElementById('newDeath').innerHTML = response['New Deaths_text']
		document.getElementById('totalCase').innerHTML = response['Total Cases_text']
		document.getElementById('totalDeath').innerHTML = response['Total Deaths_text']
		document.getElementById('totalRecover').innerHTML = response['Total Recovered_text']
	})
	.catch(err => console.error(err));

})
