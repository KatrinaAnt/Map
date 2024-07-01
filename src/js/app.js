export default class ErrorRepository {
    constructor() {
        this.error = new Map();
    }

    addError(code, value) {
        this.error.set(code, value);
    }

    translate(code) {
        if(!this.error.has(code)) {
            return('Unknown error');
        }
        return this.error.get(code);
    }
}