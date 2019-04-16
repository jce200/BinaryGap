function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function getGaps(array, gaps) {
    const firstOne = array.indexOf('1');
    const rest = array.splice(firstOne + 1)
    const secondOne = rest.indexOf("1");
    if (secondOne > 0) {
        gaps.push(secondOne);
    }
    if (rest.length > 2) {
        getGaps(rest.splice(secondOne), gaps);
    }
    return gaps;
}

function solution(value) {
    if (Number.isInteger(value) && value > 1 && value < 2147483647) {
        const decimal = dec2bin(value);
        const split = decimal.split('');
        const gaps = getGaps(split, []);
        if (Array.isArray(gaps) && gaps.length) {
            let largest = gaps[0];
            for (var i = 0; i < gaps.length; i++) {
                if (largest < gaps[i]) {
                    largest = gaps[i];                    
                }
            }
            return largest;

        } else {
            return 0;
        }
    } else {
        return 0;
    }
}
