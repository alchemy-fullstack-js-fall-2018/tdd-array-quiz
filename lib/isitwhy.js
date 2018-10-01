function whyChecker(arr) {
    arr.filter((word) => word.includes(!'y' || !'Y'));
}

module.exports = whyChecker;