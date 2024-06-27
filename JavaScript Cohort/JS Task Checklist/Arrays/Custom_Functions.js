//Custom Functions 

//forEachArray....

function forEachArray(array , callback){
  for( let i = 0 ; i < array.length ; i++){
    callback(array[i])
  }
  }
  
function logItems(items){
  console.log(items);
  }
    
let number = [1,2,3,4,5,6,7,8,9,0]
    
forEachArray(number , logItems);
console.log("-------------------------------------");
    
//mapArray....
    
function mapArray(array , callback){
  let transformedArray = [];
  for( let i = 0 ; i < array.length ; i++){
    transformedArray.push(callback(array[i]))
  }  
  for(let i = 0 ; i < transformedArray.length ; i++){
    console.log(transformedArray[i])
  }
}

function doubleNumber(num){
  return num * 2
 }

function sqrtNum(num){
  return num ** 2;
}

mapArray(number , doubleNumber)
console.log("--------------------------------------")
mapArray(number , sqrtNum)
console.log("--------------------------------------")

// filterArray

function filterArray(array , callback){
  let filteredArray = []
  for(let i = 0 ; i < array.length ; i++){
    if(callback(array[i])){
      filteredArray.push(array[i])
      }
      }
      for(let i = 0 ; i < filteredArray.length ; i++ ){
        console.log(filteredArray[i]);
        }
        }
        
        function isEven(num){
          return num % 2 === 0 ;  
          }
          function isOdd(num){
            return num % 2 != 0 ;  
            }
            
            filterArray(number , isEven);
            console.log("--------------------------------------")
            filterArray(number , isOdd);
            
