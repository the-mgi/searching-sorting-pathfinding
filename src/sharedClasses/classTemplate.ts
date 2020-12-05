export interface Blog {
    writtenBy: string;
    writtenDate: Date;
    heading: string;
    description: string;
    content: string;
    numberOfTimesRead?: number;
    minRead?: number;
    id: string;
    isBookmarked?: boolean;
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
    FIBONACCI_SEARCH = 'Fibonacci Search',

    SELECTION_SORT = 'Selection Sort',
    BUBBLE_SORT = 'Bubble Sort',
    QUICK_SORT = 'Quick Sort',
    MERGE_SORT = 'Merge Sort',
    RADIX_SORT = 'Radix Sort',
    BUCKET_SORT = 'Bucket Sort',
    BITONIC_SORT = 'Bitonic Sort',
    PANCAKE_SORT = 'Pancake Sort',

    A_STAR = 'A Star',
    DIJKSTRA = 'Dijkstra\'s'
}

export interface BoxProperties {
    rowNumber: number;
    columnNumber: number;
    color: string;
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
    },
    {
        algorithmName: 'Jump Search',
        whatIs: '',
        howDoes: '',
        worstCaseTime: '',
        worstCaseTimeString: '',
        averageCaseTime: '',
        averageCaseTimeString: '',
        bestCaseTime: '',
        bestCaseTimeString: '',
        spaceComplexityIterative: '',
        spaceComplexityIterativeString: '',
        spaceComplexityRecursive: '',
        spaceComplexityRecursiveString: '',
        sourceCodeIterative: 'https://gist.github.com/the-mgi/c692f41563b235079f832c9012a9b339.js',
        sourceCodeRecursive: 'https://gist.github.com/the-mgi/0e78ed7dd235e6e2441c60e05d023b27.js'
    },
    {
        algorithmName: 'Interpolation Search',
        whatIs: '',
        howDoes: '',
        worstCaseTime: '',
        worstCaseTimeString: '',
        averageCaseTime: '',
        averageCaseTimeString: '',
        bestCaseTime: '',
        bestCaseTimeString: '',
        spaceComplexityIterative: '',
        spaceComplexityIterativeString: '',
        spaceComplexityRecursive: '',
        spaceComplexityRecursiveString: '',
        sourceCodeIterative: '',
        sourceCodeRecursive: ''
    },
    {
        algorithmName: 'Exponential Search',
        whatIs: '',
        howDoes: '',
        worstCaseTime: '',
        worstCaseTimeString: '',
        averageCaseTime: '',
        averageCaseTimeString: '',
        bestCaseTime: '',
        bestCaseTimeString: '',
        spaceComplexityIterative: '',
        spaceComplexityIterativeString: '',
        spaceComplexityRecursive: '',
        spaceComplexityRecursiveString: '',
        sourceCodeIterative: '',
        sourceCodeRecursive: ''
    },
    {
        algorithmName: 'Fibonacci Search',
        whatIs: '',
        howDoes: '',
        worstCaseTime: '',
        worstCaseTimeString: '',
        averageCaseTime: '',
        averageCaseTimeString: '',
        bestCaseTime: '',
        bestCaseTimeString: '',
        spaceComplexityIterative: '',
        spaceComplexityIterativeString: '',
        spaceComplexityRecursive: '',
        spaceComplexityRecursiveString: '',
        sourceCodeIterative: '',
        sourceCodeRecursive: ''
    }
];

export const sortingAlgorithmsData: AlgorithmData[] = [];

/**All Data and class templates are written here because
 * currently don't know how to make CRUD API, when made,
 * easily methods here would be called and data will be assigned
 */

export const blogsData: Blog[] = [
    {
        writtenBy: 'Tara Haelle Medium',
        writtenDate: new Date('8-17-20'),
        heading: 'Your ‘Surge Capacity’ Is Depleted — It’s Why You Feel Awful',
        description: 'Here’s how to pull yourself out of despair and live your life',
        content: '<p>It was the end of the world as we knew it, and I felt fine. That’s almost exactly what I told my psychiatrist at my March 16 appointment, a few days after our children’s school district extended spring break because of the coronavirus. I said the same at my April 27 appointment, several weeks after our state’s stay-at-home order.</p>' +
            '<p>Yes, it was exhausting having a kindergartener and fourth grader doing impromptu distance learning while I was barely keeping up with work. And it was frustrating to be stuck home nonstop, scrambling to get in grocery delivery orders before slots filled up, and tracking down toilet paper. But I was still doing well because I thrive in high-stress emergency situations. It’s exhilarating for my ADHD brain. As just one example, when my husband and I were stranded in Peru during an 8.0-magnitude earthquake that killed thousands, we walked around with a first aid kit helping who we could and tracking down water and food. Then I went out with my camera to document the devastation as a photojournalist and interview Peruvians in my broken Spanish for my hometown paper.</p> <p>Now we were in a pandemic, and I’m a science journalist who has written about infectious disease and medical research for nearly a decade. I was on fire, cranking out stories, explaining epidemiological concepts in my social networks, trying to help everyone around me make sense of the frightening circumstances of a pandemic and the anxiety surrounding the virus.</p> <p>I knew it wouldn’t last. It never does. But even knowing I would eventually crash, I didn’t appreciate how hard the crash would be, or how long it would last, or how hard it would be to try to get back up over and over again, or what getting up even looked like.</p> <p>In those early months, I, along with most of the rest of the country, was using <mark>“surge capacity” to operate, as Ann Masten, PhD, a psychologist and professor of child development at the University of Minnesota, calls it. Surge capacity is a collection of adaptive systems — mental and physical — that humans draw on for short-term survival in acutely stressful situations, such as natural disasters.</mark> But natural disasters occur over a short period, even if recovery is long. Pandemics are different — the disaster itself stretches out indefinitely.</p> <p>“The pandemic has demonstrated both what we can do with surge capacity and the limits of surge capacity,” says Masten. When it’s depleted, it has to be renewed. But what happens when you struggle to renew it because the emergency phase has now become chronic?</p> <p>By my May 26 psychiatrist appointment, I wasn’t doing so hot. I couldn’t get any work done. I’d grown sick of Zoom meetups. It was exhausting and impossible to think with the kids around all day. I felt trapped in a home that felt as much a prison as a haven. I tried to conjure the motivation to check email, outline a story, or review interview notes, but I couldn’t focus. I couldn’t make myself do anything — work, housework, exercise, play with the kids — for that whole week.</p> <p>I know depression, but this wasn’t quite that. It was, as I’d soon describe in an emotional post in a social media group of professional colleagues, an “anxiety-tainted depression mixed with ennui that I can’t kick,” along with a complete inability to concentrate. I spoke with my therapist, tweaked medication dosages, went outside daily for fresh air and sunlight, tried to force myself to do some physical activity, and even gave myself permission to mope for a few weeks. We were in a pandemic, after all, and I had already accepted in March that life would not be “normal” for at least a year or two. But I still couldn’t work, couldn’t focus, hadn’t adjusted. Shouldn’t I be used to this by now?</p> <p>“Why do you think you should be used to this by now? We’re all beginners at this,” Masten told me. “This is a once in a lifetime experience. It’s expecting a lot to think we’d be managing this really well.”</p> <p>It wasn’t until my social media post elicited similar responses from dozens of high-achieving, competent, impressive women I professionally admire that I realized I wasn’t in the minority. My experience was a universal and deeply human one.</p>',
        numberOfTimesRead: 200,
        minRead: 13,
        isBookmarked: true,
        id: 'zyx01'
    },
    {
        writtenBy: 'Muhammad Usama',
        writtenDate: new Date(),
        heading: 'Your ‘Surge Capacity’ Is Depleted — It’s Why You Feel Awful',
        description: 'Here’s how to pull yourself out of despair and live your life',
        content: '<p>It was the end of the world as we knew it, and I felt fine. That’s almost exactly what I told my psychiatrist at my March 16 appointment, a few days after our children’s school district extended spring break because of the coronavirus. I said the same at my April 27 appointment, several weeks after our state’s stay-at-home order.</p>' +
            '<p>Yes, it was exhausting having a kindergartener and fourth grader doing impromptu distance learning while I was barely keeping up with work. And it was frustrating to be stuck home nonstop, scrambling to get in grocery delivery orders before slots filled up, and tracking down toilet paper. But I was still doing well because I thrive in high-stress emergency situations. It’s exhilarating for my ADHD brain. As just one example, when my husband and I were stranded in Peru during an 8.0-magnitude earthquake that killed thousands, we walked around with a first aid kit helping who we could and tracking down water and food. Then I went out with my camera to document the devastation as a photojournalist and interview Peruvians in my broken Spanish for my hometown paper.</p> <p>Now we were in a pandemic, and I’m a science journalist who has written about infectious disease and medical research for nearly a decade. I was on fire, cranking out stories, explaining epidemiological concepts in my social networks, trying to help everyone around me make sense of the frightening circumstances of a pandemic and the anxiety surrounding the virus.</p> <p>I knew it wouldn’t last. It never does. But even knowing I would eventually crash, I didn’t appreciate how hard the crash would be, or how long it would last, or how hard it would be to try to get back up over and over again, or what getting up even looked like.</p> <p>In those early months, I, along with most of the rest of the country, was using <mark>“surge capacity” to operate, as Ann Masten, PhD, a psychologist and professor of child development at the University of Minnesota, calls it. Surge capacity is a collection of adaptive systems — mental and physical — that humans draw on for short-term survival in acutely stressful situations, such as natural disasters.</mark> But natural disasters occur over a short period, even if recovery is long. Pandemics are different — the disaster itself stretches out indefinitely.</p> <p>“The pandemic has demonstrated both what we can do with surge capacity and the limits of surge capacity,” says Masten. When it’s depleted, it has to be renewed. But what happens when you struggle to renew it because the emergency phase has now become chronic?</p> <p>By my May 26 psychiatrist appointment, I wasn’t doing so hot. I couldn’t get any work done. I’d grown sick of Zoom meetups. It was exhausting and impossible to think with the kids around all day. I felt trapped in a home that felt as much a prison as a haven. I tried to conjure the motivation to check email, outline a story, or review interview notes, but I couldn’t focus. I couldn’t make myself do anything — work, housework, exercise, play with the kids — for that whole week.</p> <p>I know depression, but this wasn’t quite that. It was, as I’d soon describe in an emotional post in a social media group of professional colleagues, an “anxiety-tainted depression mixed with ennui that I can’t kick,” along with a complete inability to concentrate. I spoke with my therapist, tweaked medication dosages, went outside daily for fresh air and sunlight, tried to force myself to do some physical activity, and even gave myself permission to mope for a few weeks. We were in a pandemic, after all, and I had already accepted in March that life would not be “normal” for at least a year or two. But I still couldn’t work, couldn’t focus, hadn’t adjusted. Shouldn’t I be used to this by now?</p> <p>“Why do you think you should be used to this by now? We’re all beginners at this,” Masten told me. “This is a once in a lifetime experience. It’s expecting a lot to think we’d be managing this really well.”</p> <p>It wasn’t until my social media post elicited similar responses from dozens of high-achieving, competent, impressive women I professionally admire that I realized I wasn’t in the minority. My experience was a universal and deeply human one.</p>',
        numberOfTimesRead: 11,
        minRead: 4,
        id: 'zyx02',
        isBookmarked: false,

    },
    {
        writtenBy: 'Muhammad Usama',
        writtenDate: new Date(),
        heading: 'Your ‘Surge Capacity’ Is Depleted — It’s Why You Feel Awful',
        description: 'Here’s how to pull yourself out of despair and live your life',
        content: '<p>It was the end of the world as we knew it, and I felt fine. That’s almost exactly what I told my psychiatrist at my March 16 appointment, a few days after our children’s school district extended spring break because of the coronavirus. I said the same at my April 27 appointment, several weeks after our state’s stay-at-home order.</p>' +
            '<p>Yes, it was exhausting having a kindergartener and fourth grader doing impromptu distance learning while I was barely keeping up with work. And it was frustrating to be stuck home nonstop, scrambling to get in grocery delivery orders before slots filled up, and tracking down toilet paper. But I was still doing well because I thrive in high-stress emergency situations. It’s exhilarating for my ADHD brain. As just one example, when my husband and I were stranded in Peru during an 8.0-magnitude earthquake that killed thousands, we walked around with a first aid kit helping who we could and tracking down water and food. Then I went out with my camera to document the devastation as a photojournalist and interview Peruvians in my broken Spanish for my hometown paper.</p> <p>Now we were in a pandemic, and I’m a science journalist who has written about infectious disease and medical research for nearly a decade. I was on fire, cranking out stories, explaining epidemiological concepts in my social networks, trying to help everyone around me make sense of the frightening circumstances of a pandemic and the anxiety surrounding the virus.</p> <p>I knew it wouldn’t last. It never does. But even knowing I would eventually crash, I didn’t appreciate how hard the crash would be, or how long it would last, or how hard it would be to try to get back up over and over again, or what getting up even looked like.</p> <p>In those early months, I, along with most of the rest of the country, was using <mark>“surge capacity” to operate, as Ann Masten, PhD, a psychologist and professor of child development at the University of Minnesota, calls it. Surge capacity is a collection of adaptive systems — mental and physical — that humans draw on for short-term survival in acutely stressful situations, such as natural disasters.</mark> But natural disasters occur over a short period, even if recovery is long. Pandemics are different — the disaster itself stretches out indefinitely.</p> <p>“The pandemic has demonstrated both what we can do with surge capacity and the limits of surge capacity,” says Masten. When it’s depleted, it has to be renewed. But what happens when you struggle to renew it because the emergency phase has now become chronic?</p> <p>By my May 26 psychiatrist appointment, I wasn’t doing so hot. I couldn’t get any work done. I’d grown sick of Zoom meetups. It was exhausting and impossible to think with the kids around all day. I felt trapped in a home that felt as much a prison as a haven. I tried to conjure the motivation to check email, outline a story, or review interview notes, but I couldn’t focus. I couldn’t make myself do anything — work, housework, exercise, play with the kids — for that whole week.</p> <p>I know depression, but this wasn’t quite that. It was, as I’d soon describe in an emotional post in a social media group of professional colleagues, an “anxiety-tainted depression mixed with ennui that I can’t kick,” along with a complete inability to concentrate. I spoke with my therapist, tweaked medication dosages, went outside daily for fresh air and sunlight, tried to force myself to do some physical activity, and even gave myself permission to mope for a few weeks. We were in a pandemic, after all, and I had already accepted in March that life would not be “normal” for at least a year or two. But I still couldn’t work, couldn’t focus, hadn’t adjusted. Shouldn’t I be used to this by now?</p> <p>“Why do you think you should be used to this by now? We’re all beginners at this,” Masten told me. “This is a once in a lifetime experience. It’s expecting a lot to think we’d be managing this really well.”</p> <p>It wasn’t until my social media post elicited similar responses from dozens of high-achieving, competent, impressive women I professionally admire that I realized I wasn’t in the minority. My experience was a universal and deeply human one.</p>',
        numberOfTimesRead: 100,
        minRead: 9,
        id: 'zyx03',
        isBookmarked: true,
    },
    {
        writtenBy: 'Ali Mujahid Geeniee',
        writtenDate: new Date(),
        heading: 'Your ‘Surge Capacity’ Is Depleted — It’s Why You Feel Awful',
        description: 'Here’s how to pull yourself out of despair and live your life',
        content: '<p>It was the end of the world as we knew it, and I felt fine. That’s almost exactly what I told my psychiatrist at my March 16 appointment, a few days after our children’s school district extended spring break because of the coronavirus. I said the same at my April 27 appointment, several weeks after our state’s stay-at-home order.</p>' +
            '<p>Yes, it was exhausting having a kindergartener and fourth grader doing impromptu distance learning while I was barely keeping up with work. And it was frustrating to be stuck home nonstop, scrambling to get in grocery delivery orders before slots filled up, and tracking down toilet paper. But I was still doing well because I thrive in high-stress emergency situations. It’s exhilarating for my ADHD brain. As just one example, when my husband and I were stranded in Peru during an 8.0-magnitude earthquake that killed thousands, we walked around with a first aid kit helping who we could and tracking down water and food. Then I went out with my camera to document the devastation as a photojournalist and interview Peruvians in my broken Spanish for my hometown paper.</p> <p>Now we were in a pandemic, and I’m a science journalist who has written about infectious disease and medical research for nearly a decade. I was on fire, cranking out stories, explaining epidemiological concepts in my social networks, trying to help everyone around me make sense of the frightening circumstances of a pandemic and the anxiety surrounding the virus.</p> <p>I knew it wouldn’t last. It never does. But even knowing I would eventually crash, I didn’t appreciate how hard the crash would be, or how long it would last, or how hard it would be to try to get back up over and over again, or what getting up even looked like.</p> <p>In those early months, I, along with most of the rest of the country, was using <mark>“surge capacity” to operate, as Ann Masten, PhD, a psychologist and professor of child development at the University of Minnesota, calls it. Surge capacity is a collection of adaptive systems — mental and physical — that humans draw on for short-term survival in acutely stressful situations, such as natural disasters.</mark> But natural disasters occur over a short period, even if recovery is long. Pandemics are different — the disaster itself stretches out indefinitely.</p> <p>“The pandemic has demonstrated both what we can do with surge capacity and the limits of surge capacity,” says Masten. When it’s depleted, it has to be renewed. But what happens when you struggle to renew it because the emergency phase has now become chronic?</p> <p>By my May 26 psychiatrist appointment, I wasn’t doing so hot. I couldn’t get any work done. I’d grown sick of Zoom meetups. It was exhausting and impossible to think with the kids around all day. I felt trapped in a home that felt as much a prison as a haven. I tried to conjure the motivation to check email, outline a story, or review interview notes, but I couldn’t focus. I couldn’t make myself do anything — work, housework, exercise, play with the kids — for that whole week.</p> <p>I know depression, but this wasn’t quite that. It was, as I’d soon describe in an emotional post in a social media group of professional colleagues, an “anxiety-tainted depression mixed with ennui that I can’t kick,” along with a complete inability to concentrate. I spoke with my therapist, tweaked medication dosages, went outside daily for fresh air and sunlight, tried to force myself to do some physical activity, and even gave myself permission to mope for a few weeks. We were in a pandemic, after all, and I had already accepted in March that life would not be “normal” for at least a year or two. But I still couldn’t work, couldn’t focus, hadn’t adjusted. Shouldn’t I be used to this by now?</p> <p>“Why do you think you should be used to this by now? We’re all beginners at this,” Masten told me. “This is a once in a lifetime experience. It’s expecting a lot to think we’d be managing this really well.”</p> <p>It wasn’t until my social media post elicited similar responses from dozens of high-achieving, competent, impressive women I professionally admire that I realized I wasn’t in the minority. My experience was a universal and deeply human one.</p>',
        numberOfTimesRead: 110,
        minRead: 10,
        id: 'zyx04',
        isBookmarked: false,
    }
];

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

export function sleep(ms: number): Promise<any> {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}

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
