
//all example together..
function processInput(input: unknown): void {
    if (typeof input === "string") {
        console.log("Received a string:", input.toUpperCase());
    } else if (typeof input === "number") {
        console.log("Received a number:", input.toFixed(2));
    } else {
        handleUnexpectedInput('input');
    }
}

function handleUnexpectedInput(message: string): never {
    throw new Error("Unexpected input type: " + message);
}

processInput("Hello");
processInput(42);