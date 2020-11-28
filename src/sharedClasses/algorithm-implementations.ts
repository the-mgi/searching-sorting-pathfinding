function LinearSearchIterative(array: number[], key: number): number {
    array.forEach((value, index) => {
        if (value === key) {
            return index;
        }
    });
    return -1;
}

function LinearSearchRecursive(array: number[], key: number, index: number = 0): number {
    if (index >= array.length) {
        return -1;
    } else if (array[index] === key) {
        return index;
    }
    LinearSearchRecursive(array, key, index += 1);
}

function BinarySearchIterative(array: number[], key: number): number {
    let [startIndex, lastIndex] = [0, array.length];
    let mid = Math.floor((startIndex + lastIndex) / 2);
    while (startIndex <= lastIndex) {
        if (key === array[mid]) {
            return mid;
        } else if (key < array[mid]) {
            lastIndex = mid - 1;
        } else {
            startIndex = mid + 1;
        }
        mid = Math.floor((startIndex + lastIndex) / 2);
    }
    return -1;
}

function BinarySearchRecursive(array: number[], key, startIndex: number, lastIndex: number): number {
    const mid = Math.floor((startIndex + lastIndex) / 2);
    if (!(startIndex <= lastIndex)) {
        return -1;
    } else if (key === array[mid]) {
        return mid;
    } else if (key < array[mid]) {
        BinarySearchRecursive(array, key, startIndex, mid - 1);
    } else {
        BinarySearchRecursive(array, key, mid + 1, lastIndex);
    }
}

function JumpSearchIterative(array: number[], key: number): number {
    const jumpSize = Math.floor(Math.sqrt(array.length));
    let val = jumpSize;
    while (val <= array.length) {
        if ((array[val] > key) || (val >= array.length)) {
            break;
        } else {
            val = val + jumpSize;
        }
    }
    let ansIndex = -1;
    val = val > array.length ? array.length : val;
    for (let i = (val - jumpSize); i < val; i++) {
        if (array[i] === key) {
            ansIndex = i;
        }
    }
    return ansIndex;
}

function JumpSearchRecursive(array: number[], key: number): number {
    const jumpSize = Math.floor(Math.sqrt(array.length));
    let val = jumpSize;
    const getHighLowRanges = () => {
        if ((array[val] > key) || (val >= array.length)) {
            return;
        } else {
            val = val + jumpSize;
            getHighLowRanges();
        }
    };
    getHighLowRanges();
    let ansIndex = -1;
    val = val > array.length ? array.length : val;
    const iterateOverRange = (startIndex, lastIndex) => {
        if (startIndex >= lastIndex) {
            return -1;
        } else if (array[startIndex] === key) {
            return startIndex;
        } else {
            return iterateOverRange(startIndex + 1, lastIndex);
        }
    };
    ansIndex = iterateOverRange(val - jumpSize, val);
    return ansIndex;
}

function InterpolationSearchIterative(array: number[], key: number): number {
    let startIndex = 0;
    let lastIndex = array.length - 1;
    while (startIndex <= lastIndex && key >= array[startIndex] && key <= array[lastIndex]) {
        const position =
            Math.floor(startIndex + (
                (lastIndex - startIndex) /
                (array[lastIndex] - array[startIndex]) *
                (key - array[startIndex])));
        if (array[position] === key) {
            return position;
        } else if (array[position] > key) {
            lastIndex = position - 1;
        } else {
            startIndex = position + 1;
        }
    }
    return -1;
}

function InterpolationSearchRecursive(
    array: number[],
    key: number,
    startIndex: number,
    lastIndex: number
): number {
    const position =
        Math.floor(startIndex + (
            (lastIndex - startIndex) /
            (array[lastIndex] - array[startIndex]) *
            (key - array[startIndex])));
    if (startIndex <= lastIndex && key >= array[startIndex] && key <= array[lastIndex]) {
        if (array[position] === key) {
            return position;
        } else if (key < array[position]) {
            lastIndex = position - 1;
        } else {
            startIndex = position + 1;
        }
        return InterpolationSearchRecursive(array, key, startIndex, lastIndex);
    }
    return -1;
}
