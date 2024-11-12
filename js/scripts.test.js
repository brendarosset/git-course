
describe('Username validation regex', () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;

    test('valid username with all required characters', () => {
        expect(regex.test('Valid1!')).toBe(false);
    });

    test('invalid username without capital letter', () => {
        expect(regex.test('invalid1!')).toBe(false);
    });

    test('invalid username without special character', () => {
        expect(regex.test('Invalid1')).toBe(false);
    });

    test('invalid username without number', () => {
        expect(regex.test('Invalid!')).toBe(false);
    });

    test('invalid username with less than 8 characters', () => {
        expect(regex.test('Val1!')).toBe(false);
    });

    test('valid username with more than 8 characters', () => {
        expect(regex.test('ValidUsername1!')).toBe(true);
    });
});