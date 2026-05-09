// map function 


const numbers = [1, 2, 3, 4, 5];

function square(numbers) {
    return numbers * numbers;
}

const squaredNumbers = Map(numbers, sqaure);

// filtering 

const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr); 


// filtering logic 

function filteringLogic(n){
    if (n%2 === 0){
        return true;
    } else {
        return false;
    }
}

const ans = arr.filter(filterLogic)


// assignment 

const map = (arr, fn) => {
    const transformedArr = [];
    for (let i = 0 ; i< arr.length; i++){
        transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
}