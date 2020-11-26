export class Blog {
    constructor(
        public writtenBy: string,
        public writtenDate: Date,
        public heading: string,
        public description: string,
        public content: string
    ) {
    }
}

export interface AlgorithmData {
    algorithmName: string;
    whatIs: string;
    howDoes: string;
    worstCaseTime: string;
    worstCaseTimeString: string;
    averageCaseTime: string;
    averageCaseTimeString: string;
    bestCaseTime: string;
    bestCaseTimeString: string;
    spaceComplexityIterative: string;
    spaceComplexityIterativeString: string;
    spaceComplexityRecursive: string;
    spaceComplexityRecursiveString: string;
    sourceCodeIterative?: string;
    sourceCodeRecursive?: string;
}

export class Bar {
    constructor(
        public value: number,
        public height: number,
        public color: string
    ) {
    }
}

export enum Algorithm {
    LINEAR_SEARCH = 'Linear Search',
    BINARY_SEARCH = 'Binary Search',
    JUMP_SEARCH = 'Jump Search',
    INTERPOLATION_SEARCH = 'Interpolation Search',
    EXPONENTIAL_SEARCH = 'Exponential Search',
    FIBONACCI_SEARCH = 'Fibonacci Search'
}

export const optionsAvailableSort: { id: string, name: string }[] = [
    {id: 'selection', name: 'Selection Sort'},
    {id: 'bubble', name: 'Bubble Sort'},
    {id: 'quick', name: 'Quick Sort'},
    {id: 'merge', name: 'Merge Sort'},
    {id: 'radix', name: 'Radix Sort'},
    {id: 'bucket', name: 'Bucket Sort'},
    {id: 'bitonic', name: 'Bitonic Sort'},
    {id: 'pancake', name: 'Pancake Sort'}
];

export const optionsAvailableSearch: { id: string, name: string }[] = [
    {id: 'linear', name: 'Linear Search'},
    {id: 'binary', name: 'Binary Search'},
    {id: 'jump', name: 'Jump Search'},
    {id: 'interpolation', name: 'Interpolation Search'},
    {id: 'exponential', name: 'Exponential Search'},
    {id: 'fibonacci', name: 'Fibonacci Search'}
];

export const optionsAvailablePathfinding: { id: string, name: string }[] = [
    {id: 'star', name: 'A Star Algorithm'},
    {id: 'dijkstra', name: 'Dijkstra\'s Algorithm'}
];

export const optionsAvailableSpeedValues: { id: string, name: string }[] = [
    {id: 'onePointO', name: '1.0x'},
    {id: 'onePointFive', name: '1.5x'},
    {id: 'twoPointO', name: '2.0x'},
    {id: 'twpPointFive', name: '2.5x'},
    {id: 'threePointO', name: '3.0x'},
    {id: 'threePointFive', name: '3.5x'},
    {id: 'fourPointO', name: '4.0x'},
    {id: 'fourPointFive', name: '4.5x'},
    {id: 'fivePointO', name: '5.0x'},

];

export const searchingAlgorithmsData: AlgorithmData[] = [
    {
        algorithmName: 'Linear Search',
        whatIs: '<span><strong><u>What is? </u></strong></span>Linear Search is the most basic type of <mark>Sequential Search</mark> which can be used to search objects in any given array. It doesn\'t care if the given array is in sorted order or not, it gives the accurate results in both cases. It can be useful in areas with much less array sizes because of it\'s time complexity.',
        howDoes: '<span><strong><u>How?</u></strong></span> It achieves it\'s desired goal by traversing each element of the given array and checking for if the given key matches the element.',
        worstCaseTime: 'O( n )',
        worstCaseTimeString: 'would be that if  the element is not present in the array and traversing the complete array would be of no use.',
        averageCaseTime: 'θ ( n )',
        // tslint:disable-next-line:max-line-length
        averageCaseTimeString: 'would be that element could be present at any index in the array',
        bestCaseTime: 'Ω( 1 )',
        bestCaseTimeString: 'would be if the required element is present at first index of the array and the algorithm would be able to get that in only 1 iteration.',
        spaceComplexityIterative: 'O( 1 )',
        spaceComplexityIterativeString: 'does not keep the elements in memory, thereby its SPACE COMPLEXITY would be',
        spaceComplexityRecursive: 'O( 1 )',
        spaceComplexityRecursiveString: 'does not keep the elements in memory or rather specifically DOES NOT MAINTAIN A STACK therefore SPACE COMPLEXITY would be',
        sourceCodeIterative: 'https://gist.github.com/the-mgi/46785c487efa68a1a087583c47d917cd.js',
        sourceCodeRecursive: 'https://gist.github.com/the-mgi/b339aaed7c5c436507538e73097b2f30.js'
    },
    {
        algorithmName: 'Binary Search',
        whatIs: '<span><strong><u>What is?</u></strong></span> Binary Search belongs to the <mark>Interval Search</mark> category which is also used to search for the required object in the given array but more optimally than the <code>Linear Search</code> as it is <mark>Sequential</mark>. It requires array to be in <mark>SORTED ORDER</mark>. It is feasible to be used to searhc for elements with much larger sizes!',
        howDoes: '<span><strong><u>How?</u></strong></span> It actually works on the formula of <code>mid = (startIndex + lastIndex) / 2</code>, calculating <mark>middle</mark> index of the array, where for the first iteration <code>startIndex = 0</code> and <code>lastIndex = list.length</code>. It checks for the <mark>key value</mark> to be equal to the value at <code>list[mid]</code>. If it returns <code>true</code>, spits out the index of the key. Otherwise it keeps calculating the <code>mid</code> and if the value at <code>list[mid]</code> is greater than <code>key</code> value then <code>lastIndex = mid -  1</code> else <code>startIndex = mid + 1</code> because we know that the array is sorted, thereby smaller value will be in the first half and larger will be in the second half.',
        worstCaseTime: 'O( log n )',
        worstCaseTimeString: 'would be the case that if the element to be searched is not present in the array. Elements would be traversed without any use but not all elements will be traversed of course, because of how BINARY SEARCH works.',
        averageCaseTime: 'O( log n )',
        averageCaseTimeString: 'would be the case that element could be anywhere in the array.',
        bestCaseTime: 'O( 1 )',
        bestCaseTimeString: 'would be if the required element is present at middle index in first iteration of the array.',
        spaceComplexityIterative: 'O( 1 )',
        spaceComplexityIterativeString: 'does not keep the elements in memory, thereby its SPACE COMPLEXITY would be',
        spaceComplexityRecursive: 'O( 1 )',
        spaceComplexityRecursiveString: 'does not keep the elements in memory or rather specifically DOES NOT MAINTAIN A STACK therefore SPACE COMPLEXITY would be',
        sourceCodeIterative: 'https://gist.github.com/the-mgi/fb5890f55b40110a82d13015de78a7a9.js',
        sourceCodeRecursive: 'https://gist.github.com/the-mgi/893fa516cf3ddecf9269b476fe8eef18.js'
    }
];

export const sortingAlgorithmsData: AlgorithmData[] = [];

export function findAlgorithmSort(algoName: string): AlgorithmData {
    sortingAlgorithmsData.forEach(singleAlgorithm => {
        if (singleAlgorithm.algorithmName === algoName) {
            return singleAlgorithm;
        }
    });
    return null;
}

/**All Data and class templates are written here because
 * currently don't know how to make CRUD API, when made,
 * easily methods here would be called and data will be assigned
 */


export function parseArray(value: string): number[] {
    return value.split(',').map(singleEntry => {
        try {
            return +singleEntry;
        } catch (error) {
        }
    });
}

const randomFunction = (n: number, startValue: number, lastValue: number) =>
    Array.from({length: n}, (value, key) => key).map(i => Math.floor(startValue + Math.random() * lastValue));

export const randomColor = () => '#' + Math.random().toString(16).substr(-6);

/**
 * I don't know why this shit is not working
 */
export function findMinMaxNumber(array: number[], startIndex: number, lastIndex: number): number[] {
    let max;
    let min;

    if (startIndex === lastIndex) {
        max = array[startIndex];
        min = array[startIndex];
    } else if (startIndex + 1 === lastIndex) {
        if (array[startIndex] < array[lastIndex]) {
            max = array[lastIndex];
            min = array[startIndex];
        } else {
            max = array[startIndex];
            min = array[lastIndex];
        }
    } else {
        const mid = startIndex + (lastIndex - startIndex) / 2;
        const left: number[] = findMinMaxNumber(array, startIndex, mid);
        const right: number[] = findMinMaxNumber(array, mid + 1, lastIndex);
        if (left[0] > right[0]) {
            max = left[0];
        } else {
            max = right[0];
        }

        if (left[1] < right[1]) {
            min = left[1];
        } else {
            min = right[1];
        }
    }
    return [max, min];
}

function LinearSearch(array: number[], key: number): number {
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
