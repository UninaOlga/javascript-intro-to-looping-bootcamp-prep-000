function forLoop(array)
{
  for (var i=0; i<25; i++)
  {
    if (i===1)
       {array.unshift("Iam 1 strange loop.")}
    else {
      array.unshift(`I am ${i} strange loops.`)
    }}
  return array;
  }

function whileLoop(n){
  let countdown = n;
while (countdown > 0) {
  console.log(--countdown)
}
return "done";
}

function doWhileLoop(array){
  do {
  array.shift()
  } while (array.length);
  return array;
}
