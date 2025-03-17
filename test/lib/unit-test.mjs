function logResult(message, isSuccess, group = 'General') {
    const results = document.getElementById('results');
    let groupElement = document.getElementById(`group-${group}`);

    if (!groupElement) {
        groupElement = document.createElement('section');
        groupElement.id = `group-${group}`;
        groupElement.className = 'test-group';
        groupElement.innerText = group;
        results.appendChild(groupElement);
    }

    const resultElement = document.createElement('div');
    resultElement.className = isSuccess ? 'test-pass' : 'test-fail';
    resultElement.innerText = isSuccess ? `✅ ${message}` : `❌ ${message}`;
    groupElement.appendChild(resultElement);
}

function test(description, fn, group = 'General') {
    try {
        fn();
        logResult(description, true, group);
    } catch (error) {
        logResult(`${description} - ${error.message}`, false, group);
    }
}

function assert(condition, expectedMessage = 'Assertion failed') {
    if (!condition) {
        throw new Error(expectedMessage);
    }
}

export { test, assert }