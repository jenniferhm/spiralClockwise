function spiralClockwise(arr) {
  const arrLength = arr.length;
  const rows = arrLength;
  const cols = arr[0].length;
  if (arrLength === 0) return arr;

  const dirMap = { "right": 1, "down": 2, "left": 3, "up": 4 }
  let topIdx = 0; //topIdx most row
  let bottomIdx = rows - 1; // bottomIdx most row
  let leftIdx = 0; //leftIdx most column
  let rightIdx = cols - 1; // rightIdx most column
  let direction = 1;
  
  let unrolledArr = [];
  while (topIdx <= bottomIdx && leftIdx <= rightIdx) {
    if (direction === dirMap["right"]) {
      for (let i = leftIdx; i <= rightIdx; i++) {
        unrolledArr.push(arr[topIdx][i]);
      }
      topIdx++;
      direction++;
    } else if (direction === dirMap["down"]) {
      for (let i = topIdx; i <= bottomIdx; i++) {
        unrolledArr.push(arr[i][rightIdx]);
      }
      rightIdx--;
      direction++;
    } else if (direction === dirMap["left"]) {
      for (let i = rightIdx; i >= leftIdx; i--) {
        unrolledArr.push(arr[bottomIdx][i]);
      }
      bottomIdx--;
      direction++;
    } else {
      for (let i = bottomIdx; i >= topIdx; i--) {
        unrolledArr.push(arr[i][leftIdx]);
      }
      leftIdx++;
      direction = 1;
    }
  }
  return unrolledArr.join("");
}

module.exports = spiralClockwise;