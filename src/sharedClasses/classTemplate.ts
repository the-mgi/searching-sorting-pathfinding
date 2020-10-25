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
        public sourceCode: object,
        public howDoes: string,
        public worstCaseTime: string,
        public averageCaseTime: string,
        public bestCaseTime: string,
        public spaceComplexity: string
    ) {
    }
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

export const sortingAlgorithms: string[] = [
    'Selection Sort',
    'Bubble sort',
    'Quick Sort',
    'Merge Sort',
    'Radix Sort',
    'Bucket Sort',
    'Bitonic Sort',
    'Pancake Sort'
];

export const searchingAlgorithms: string[] = [
    'Linear Search',
    'Binary Search',
    'Jump Search',
    'Interpolation Search',
    'Exponential Search',
    'Fibonacci Search'
];

export const pathfindingAlgorithms: string[] = [
    'A Star Algorithm',
    'Dijkstra\'s Algorithm'
];

export const sortingAlgorithmsData: AlgorithmData[] = [
    new AlgorithmData(
        'SelectionSort',
        'what is this algorithm?',
        {sourceCode: 'this is the source code'},
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
