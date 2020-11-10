//Сума всех элементов 
function massiveSum(el) {
    let responseSum = [0];
    for (let i = 0; i < el.length; i++) {
        if (!isNaN(el[i]) && el[i] !== undefined) {
            responseSum[0] += el[i];
        }
    }
    return Number(responseSum);
}
console.log(massiveSum([NaN, NaN, null, undefined, -123, 1123]));
console.log('-----');
//Максимальное значение
function massiveMax(el) {
    let val = el[0];
    for (let i = 1; i < el.length; i++) {
        if (isNaN(val)) {
            val = el[i];
        }
        if (el[i] !== undefined && !isNaN(el[i]) && el[i] > val) {
            val = el[i];
        }
    }
    return Number(val);
}
console.log(massiveMax([NaN, 123, null, undefined, -123, 1123]));
console.log('-----');
//Минимальное значение
function massiveMin(el) {
    let val = el[0];
    for (let i = 1; i < el.length; i++) {
        if (isNaN(val)) {
            val = el[i];
        }
        if (el[i] !== undefined && !isNaN(el[i]) && el[i] < val) {
            val = el[i];
        }
    }
    return Number(val);
}

console.log(massiveMin([NaN, 123, null, undefined, -123, 1123]));
console.log('-----');

//Алгоритм на подсчёт воды в ямах 
function massive(el) {
    let result = 0;
    let num;
    for (let i = 0; i < el.length; i++) {
        if (el[i] >= el[i + 2] && el[i + 2] >= el[i + 1] && el[i] !== num) {
            result += el[i + 2] - el[i + 1];
            
            if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
                num = el[i + 1];
            }
        } else if (el[i] <= el[i + 2] && el[i] >= el[i + 1] && el[i] !== num) {
            result += el[i] - el[i + 1];
            
            if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
                num = el[i + 1];
            }
        } else if (el[i] <= el[i + 2] && el[i] <= el[i + 1] && el[i] !== num) {
            result += el[i + 2] - el[i + 1];
            
            if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
                num = el[i + 1];
            }
        } else if (el[i + 2] <= el[i] && el[i + 2] <= el[i + 1] && el[i] !== num) {
            result += el[i] - el[i + 1];
            if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
                num = el[i + 1];
            }
        }
    }
    return result;
}

console.log(massive([2, 1, 5, 5, 4, 5, 5, 3, 6]));
