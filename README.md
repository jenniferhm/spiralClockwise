# spiralClockwise
Spiral traversal of a matrix in a clockwise direction.


### What is in this file?
A solution to the spiral traversal of a matrix in a clockwise direction.


### Which part of the code am I proud of?
The while loop.

```
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

```


### Technology Used:
- [Jest](https://jestjs.io/) - JavaScript testing framework


### Installation:

To get started, npm install `package.json`.

```
$ npm i
```

## Test the Solution:

```
$ npm test
```


