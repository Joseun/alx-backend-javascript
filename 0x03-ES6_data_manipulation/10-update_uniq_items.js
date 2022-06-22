//a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1
function updateUniqueItems(groceries) {
    if (!(groceries instanceof Map)) {
        throw new Error('Cannot process');
    }
    groceries.forEach((value, key) => {
        if (value === 1) {
        groceries.set(key, 100);
    };
});
};
export default updateUniqueItems;
