function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var glas = ['a', 'e', 'i', 'o', 'u'];
    var arr = s.split('');
    var fullArr = [];
    arr.forEach(function (element) {
        fullArr.push(element);
    });
    var length = fullArr.length - 1;
    var index = glas.indexOf(fullArr[0]);
    if (index != -1) {
        if (fullArr[0] == fullArr[length]) {
            return true;
        } else {
            return false;
        }
        /*
         * Do not remove the return statement
         */
    } else {
        return false;
    }
}

regexVar('ubcbu');