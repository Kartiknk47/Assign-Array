// 1. let reverse ([100,80,50,40,10])
function reverse(arr){
    let rev = []
    for(let n of arr)
        rev.unshift(n);
    return rev;
    }
    console.log(reverse([100,80,50,40,10]))
    
    // 2. secondlargestnum
    
    numArray = [99,75,270,854]
    let largestNumber = 0
    let secondLargest = 0
        for(n of numArray){
            (n > largestNumber)
            secondLargest = largestNumber
            largestNumber = n
        }
    console.log("secondLargest",secondLargest)
    
    // 3.  merge Two Arrays 
    
    array1 = [2,16,31,6];
    array2 = [27,4,7,2,16];
        const merge = array2.concat(array1)
    console.log(merge)
    
    // 3. merge Two Arrays without duplicate
    
    function mergeWithoutDuplicate(array1 , array2){
        mergedArray = (array1, array2);
        newArray = [...new Set(mergedArray)]
        
        return newArray;
    }
    array1 = ["2","16",'31','6'];
    array2 = ['27','4','7','2',"16"];
    
    result = mergeWithoutDuplicate(array1 , array2)
    
    console.log (result)
    

    // 5. implement the includes
arr = ["75","90","50","60"]
arr = arr.includes("50")
console.log(arr)

animals = ["Cat","Dog","Fish","Horse"]
animals = animals.includes("Monkey")
console.log(animals)

    // 6. shift elements in an array by left position
function shiftLeft(arr){
    if(arr.length===0) return arr;
    let first = arr.shift();
    arr.push(first);
    return arr
}
console.log(shiftLeft([10,40,60,80]))

function shiftArrLeft(arr){
    if(arr.length ===0)return arr;
    first = arr.shift();
    arr.push(first)
    return arr
}
console.log(shiftArrLeft(["aniket",'rohit','shreyash','virat']))

// 8. remove all duplicates elements in an array

function removeDuplicates(arr){
    return [new Set(arr)]
}
console.log(removeDuplicates([4,5,6,6,9,9]))

// 9. create a 2D array representing a multiplication table 1 to 10
function multiplicationTable(){
    table = []
    for(i=0; i<=10; i++){
        row = [];
        for(j=0;j<=10;j++){
            row.push (i*j) 
        }
        table.push(row)
    }
    return table
    
}
console.table(multiplicationTable());

