import health from '../health';

test('should healthy #1', () => {
    expect(health({name: 'Маг', health: 90})).toBe("healthy");
});

test('should healthy #2', () => {
    expect(health({name: 'Маг', health: 51})).toBe("healthy");
});

test('should wounded #1', () => {
    expect(health({name: 'Маг', health: 50})).toBe("wounded");
});

test('should wounded #2', () => {
    expect(health({name: 'Маг', health: 30})).toBe("wounded");
});

test('should wounded #3', () => {
    expect(health({name: 'Маг', health: 15})).toBe("wounded");
});

test('should critical #1', () => {
    expect(health({name: 'Маг', health: 5})).toBe("critical");
});

test('should critical #2', () => {
    expect(health({name: 'Маг', health: 0})).toBe("critical");
});

test('should critical #3', () => {
    expect(health({name: 'Маг', health: -5})).toBe("");
});

test('should critical #4', () => {
    expect(health({})).toBe("");
});