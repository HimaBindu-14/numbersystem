const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30 ];
let arr1="";
let count=0;
for(let i=0;i<=numbers.length-1;i++){
    if(i%numbers[i] === 0){
        count=count+1;
    }
    if(count === 2){
        arr1 += numbers[i]+" ";
    }
}
console.log(arr1);
let max=arr1[0];
let min=arr1[0];
for(let j=0;j<=arr1.length-1;j++){
    if(arr1[j]>max){
        max=arr1[j];
    }
    else{
        if(arr1[j]<min){
            min=arr1[j]
        }
    }
}
console.log(max);
console.log(min);
    
  