/**
 * Generates a random ID consisting of alphanumeric characters and hyphens.
 * @return {string} The randomly generated ID.
 */
export const getRandomId = () => {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}
