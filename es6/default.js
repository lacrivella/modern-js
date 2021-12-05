function getLocation(continent,country,city){
  if(typeof country === 'undefined'){
    country = 'Italy'
  }
  if(typeof continent === 'undefined'){
    continent = 'Europe'
  }
  console.log(continent,country,city)
}

//instead use default
function getLocation(continent = 'Europe', country = 'Italy', city) {
  console.log(continent,country,city)
}

// object arguments
function calculatePrice({
  total = 0,
  tax = 0.1,
  tip = 0.05} = {} ){
  console.log(total + (total * tax) + (total * tip));
}
