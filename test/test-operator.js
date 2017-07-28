class TestOperator {

    constructor() {
        this.trackers = [];
    }

    runShouldReturn(shouldReturn) {
        this.shouldReturn = shouldReturn;
        return this;
    }

    getCalledRunCounter() {
        return this.trackers.length;
    }

    getCalledRunParamters(calledTime) {
        return this.trackers[calledTime];
    }

    run(number1, number2) {
        this.trackers.push({number1: number1, number2: number2});
        return this.shouldReturn;
    }
}