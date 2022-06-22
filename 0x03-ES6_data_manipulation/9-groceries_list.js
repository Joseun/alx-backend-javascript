//a function named groceriesList that returns a map of groceries with the following items (name, quantity):
function groceriesList() {
    const groceries = new Map([
        ['Apples', 10],
        ['Tomatoes', 10],
        ['Pasta', 1],
        ['Rice', 1],
        ['Banana', 5],
    ]);
    return groceries;
};
export default groceriesList;
