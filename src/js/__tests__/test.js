import ErrorRepository from '../app';

const error = new ErrorRepository();
error.addError(401, 'Unauthorized');

test('checking for an unknown error', () => {
    expect(error.translate(404)).toBe('Unknown error');
});

test('error checking', () => {
    expect(error.translate(401)).toBe('Unauthorized');
});