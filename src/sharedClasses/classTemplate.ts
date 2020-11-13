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
        whatIs: 'Linear Search is the most basic type of Sequential Search which can be used to search objects in any given array. It doesn\'t care if the given array is in sorted order or not, it gives the accurate results in both cases. It can be useful in areas with much less array sizes because of it\'s time complexity.',
        howDoes: 'It achieves it\'s desired goal by traversing each element of the given array and checking for if the given key matches the element.',
        worstCaseTime: 'O( n )',
        worstCaseTimeString: 'would be that if  the element is not present in the array and traversing the complete array would be of no use.',
        averageCaseTime: 'θ ( n )',
        // tslint:disable-next-line:max-line-length
        averageCaseTimeString: 'would be that element could be present at any index in the array or could be that not present in the array!',
        bestCaseTime: 'Ω( 1 )',
        bestCaseTimeString: 'would be if the required element is present at first index of the array and the algorithm would be able to get that in only 1 iteration.',
        spaceComplexityIterative: 'O( 1 )',
        spaceComplexityIterativeString: 'does not keep the elements in memory, thereby unlike recursion its SPACE COMPLEXITY would be',
        spaceComplexityRecursive: 'O( 1 )',
        spaceComplexityRecursiveString: 'does not keep the elements in memory or rather specifically DOES NOT MAINTAIN A STACK therefore SPACE COMPLEXITY would be',
        sourceCodeIterative: 'https://gist.github.com/the-mgi/46785c487efa68a1a087583c47d917cd.js',
        sourceCodeRecursive: 'https://gist.github.com/the-mgi/b339aaed7c5c436507538e73097b2f30.js'
    },
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
