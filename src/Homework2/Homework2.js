const getSumOrMultiByEven = (a , b) => {
    return a % 2 === 0 ? a * b : a + b;
};

const getQuarterNumber = (x, y) => {
  let result;
    if(x > 0 && y > 0){
        result = 1;
    } else if(x < 0 && y > 0){
        result = 2;
    } else if(x < 0 && y < 0){
        result = 3;
    } else if(x > 0 && y < 0){
        result = 4;
    }
    else {
        result = -1;
    }
    return result;
};

const getOnlyPositiveSum = (a, b, c) => {
  let result = 0;
  if(a >= 0){
      result += a;
  }
  if(b >= 0){
      result += b;
  }
  if(c >= 0){
      result += c;
  }
  return result;
};

const getMaxValue = (a, b, c) =>{
  let result;
  a * b * c > a + b + c ? result = (a * b * c) + 3
                        : result = (a + b + c) + 3;
  return result;
};

const getRating = (mark) => {
    let rating;

    if(mark >= 0 && mark <= 19){
        rating = "F";
    } else if(mark >= 20 && mark <= 39){
        rating = "E";
    } else if(mark >= 40 && mark <= 59){
        rating = "D";
    } else if(mark >= 60 && mark <= 74){
        rating = "C";
    } else if(mark >= 75 && mark <= 89){
        rating = "B";
    } else if(mark >= 90 && mark <= 100){
        rating = "A";
    } else {
        throw "Error";
    }
    return rating;
};

//1) Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function getSumOfEven(){
    let sum = 0;
    let counter = 0;
    for(let i = 0; i < 99; i++) {
        if(i % 2 === 0){
            sum += i;
            counter++;
        }
    }
    return {
        "sum": sum,
        "counter": counter,
    };
}

//2) Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isSimple(number) {
    if(number === 1){
        return  false;
    }
    else if(number === 2){
        return  true;
    }
    else{
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
}

//3 Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
/**
 * @return {number}
 */
function getSqrt(number) {
    return number ** (1 / 2);
}

//4 Факториал числа

function getFactorial(number) {
    let result;
    if(number === 1){
        result = 1;
    } else if(number > 1){
        result = 1;
        for(let i = 1; i <= number; i++){
            result *= i;
        }
    } else {
        result = -1;
    }
    return result;
}

//5 Посчитать сумму цифр заданного числа

function getSumOfCurrentNumbers(number) {
    let i = 0;
    let sum = 0;
    if(number < 0){
        sum = -1;
    } else {
        while (number > 0) {
            sum += number % 10;
            number = ~~(number / 10);
            i++;
        }
    }
    return sum;
}

//6 Вывести число, которое является зеркальным отображением
function getMirrorDisplaytion(number){
    let newNumber = 0;
    while (number > 0){
        let digit = number % 10;
        number = ~~(number / 10);
        newNumber *= 10;
        newNumber += digit;
    }
    return newNumber;
}

//1 Найти минимальный элемент массива
function getMinElement(array) {
    if(array.length > 0) {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
    else {
     return -1;
    }
}
// 2 Найти максимальный элемент массива
function getMaxElement(array) {
    // array = [20, 2, -3, 4, -20, 12];
    if(array.length > 0) {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }else{
        return -1;
    }
}


//3. Найти индекс минимального элемента массива
function getMinimalIndexOfElement(array){
    //array = [10, -20, 30, -25, 40, -80];
    if(array.length > 0) {
        let minValue = array[0];
        let minIndex = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
                minIndex = i;
            }
        }
        return minIndex;
    }else {
        return -1;
    }
}

//4. Найти индекс максимального элемента массива
function getMaxIndexOfElement(array){
    //array = [10, -20, 30, 50, -95, 22, 44];
    if(array.length > 0) {
        let maxElement = array[0];
        let maxIndex = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxElement) {
                maxElement = array[i];
                maxIndex = i;
            }
        }
        return maxIndex;
    }else{
        return -1;
    }
}

//5. Посчитать сумму элементов массива с нечетными индексами
function getSumWithOddIndexes(array) {
    if(array.length > 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (i % 2 !== 0) {
                sum += array[i];
            }
        }
        return sum;
    }else{
        return -1;
    }
}

//6. Сделать реверс массива (массив в обратном направлении)
function reverseOfArray(array) {
    // array = [1, 2, 3, 4, 6, 7, 8];
    if(array.length > 0) {
        let temp;
        let tempLast;
        for (let i = 0; i < array.length / 2; i++) {
            temp = array[i];
            tempLast = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
            array[i] = tempLast;
        }
        return array;
    }else {
        return -1;
    }
}

//7. Посчитать количество нечётных элементов
function getCountOddElement(array) {
    // array = [1, 2, 3, 4, 5, 6];
    if(array.length > 0) {
        let counter = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                counter++;
            }
        }
        return counter;
    }else{ return -1;}
}

//8. Поменять местами первую и вторую половину массива,
//например, для массива 1 2 3 4, результат 3 4 1 2

function getMirrorChange(array) {
    if (array.length > 0) {
        for (let i = 0; i < array.length / 2 + array.length % 2; i++) {
            let temp = array[i];
            array[i] = array[array.length / 2 + array.length % 2 + i];
            array[array.length / 2 + array.length % 2 + i] = temp;
        }
        return array;
    }else {return -1;}
}

// 9 Bubble
function bubbleSort(array) {
    if(array.length > 0) {
        array = [2, 1, 3, 8, 7, 0];
        for (let i = array.length; i > 0; i--) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }else {return -1;}
}

// 10 Select

function selectSort(array) {
    let min;
    for(let i = 0; i < array.length - 1; i++){
        min = i;
        for(let j = i; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

// 11 Insert

// 12 Quick

// 13 Merge

// 14 Shell

// 15 Heap


//-----------------------------Функции--------------------------------
// Получить строковое название недели по номеру дня


function getDayOfTheWeek(number){
    // работает если параметр обернём в ''
    let result;
    let week = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday",
    };
    for(let key in week){
        if(key === number){
            result = week[key];
        }
    }

    return result;
}

function getDayOfWeek(number){
    let result;
    switch (number) {
        case 1 :
            result = "Sunday";
            break;
        case 2 :
            result = "Monday";
            break;
        case 3 :
            result = "Tuesday";
            break;
        case 4 :
            result = "Wednesday";
            break;
        case 5 :
            result = "Thursday";
            break;
        case 6 :
            result = "Friday";
            break;
        case 7 :
            result = "Saturday";
            break;

        default:
            break;
    }
    return result;
}

//2. Найти расстояние между двумя точками в двухмерном декартовом пространстве

function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return ( (x2 - x1) ** 2  + (y2 - y1) ** 2) ** (1/2);
}
