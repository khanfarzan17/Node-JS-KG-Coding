const Practice=()=>{
  console.log("This is the practice module!");

  function calculateArea (width,height){
    return width * height;
  }
  const totalArea = calculateArea(5,10);
  console.log(`The total area is: ${totalArea}`);

  let width=1;
  let height=1;
  const area = calculateArea(width, height);
  console.log(`The area of the rectangle is: ${area}`);
  if(area > 100){
    console.log("the area is big");
  }else if (width + height >100){
    console.log("the perimeter is big");
  }  else if ( height === width){
    console.log("the rectangle is a square");
  }
  else {
    console.log("the area is small");
  }

}

module.exports = Practice;