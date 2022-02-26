var twoSum = function (numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    let result = [];

    while (leftPointer < rightPointer) {
        let leftElement = numbers[leftPointer];
        let rightElement = numbers[rightPointer];

        if (leftElement + rightElement === target) {
            result.push(leftPointer);
            result.push(rightPointer);
            break;
        }

        if (leftElement + rightElement > target) {
            rightPointer--;
        } else {
            leftPointer++;
        }

    }

    return result;
};