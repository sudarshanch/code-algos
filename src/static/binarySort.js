function binarySort(arr, num) {
    let a1 = arr.sort((a,b) => a - b);
    let mid = 0;
    let start = 0;
    let end = a1.length - 1;
    console.log('binary', a1);
    while(start <= end) {
        mid = Math.floor((start + end)/2);
        if (a1[mid] == num) {
            console.log('Found', a1[mid]);
            return a1[mid];
        } else if (num > a1[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

binarySort([3,4,52,1,9,19,2,5,2], 5)
































// // run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);
// function binarySort(arr, num) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   console.log(sortedArr);
//   let low = 0,
//     high = sortedArr.length - 1;
//   let mid = 0;
//   //console.log(mid);
//   // arr.forEach((item) => console.log(item));
//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);
//     if (num == sortedArr[mid]) {
//       console.log('found', sortedArr[mid]);
//       return 1;
//     } else if (num > sortedArr[mid]) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   console.log('not found');
//   return -1;
// }
// binarySort([8, 1, 3, 4, 6], 40);
