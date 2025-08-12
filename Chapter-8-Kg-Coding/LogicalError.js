const logicalError = () => {

  let x=10;
  if(x=12){ //  This is a logical error, should be '==' or '==='
    // The condition will always evaluate to true because of the assignment operator '='
    console.log(x);
  }
  else {
    console.log("This is a logical error!");
  }
}

module.exports = logicalError;