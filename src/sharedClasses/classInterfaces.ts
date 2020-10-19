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
        public whatIs: string,
        public howDoes: string,
        public worstCaseTime: string,
        public averageCaseTime: string,
        public bestCaseTime: string,
        public spaceComplexity: string
    ) {
    }
}
