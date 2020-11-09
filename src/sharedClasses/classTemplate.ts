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

export class AlgorithmData {
    constructor(
        public algorithmName: string,
        public whatIs: string,
        public sourceCode: string,
        public howDoes: string,
        public worstCaseTime: string,
        public averageCaseTime: string,
        public bestCaseTime: string,
        public spaceComplexity: string
    ) {
    }
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

export const sortingAlgorithmsData: AlgorithmData[] = [
    new AlgorithmData(
        'SelectionSort',
        'what is this algorithm?',
        'this is the source code',
        'this is how it works',
        'worst time is O(n**2)',
        'average case is O(n**2)',
        'best case is O(n**2)',
        'space complexity O(1)'
    )
];

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
