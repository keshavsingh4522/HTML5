//globaly
  let a=10
  var b=20
  function demo_01()
  {
    console.log("same behaviour globally")
    console.log('let a= '+a)
    console.log('var b= '+b)
  }
  demo_01()
//locally
  //case 1
  console.log("case 1 locally---__same behavior ----giving error")
  function demo_02()
  {
  	let c=30
  	var d=40
  }
  // console.log('let c '+c)
  // console.log('var d '+d)

  console.log('case 2 locally _____diff behavior')
  if(10==10)
  {
  	var x=50
  }
  console.log('var x '+x)
  if(10==10)
  {
  	let y=60
  }
  //console.log(y)