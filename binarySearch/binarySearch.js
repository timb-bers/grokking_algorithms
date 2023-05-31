function binarySearch(sortedArray, key) {
    let start = 0; // получаем первый элемент в массиве (подмассиве)
    let end = sortedArray.length - 1; // получаем конечный элемент в массиве (подмассиве)
    while (start <= end) {
        //получаем центральный элемент массива с округлением в меньшую сторону
        let middle = Math.floor((start + end) / 2);
        console.log(middle);
        // возвращаем элемент если нашли его
        if (sortedArray[middle] === key) {
            return middle;
         //иначе если центральный элемент меньше искомого, ищем дальше в правой стороне массива
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        //если центральный элемент больше искомого, ищем дальше в левой стороне массива
        } else {
            end = middle - 1;
        }
    }
    // возвращаем в том случае если искомого элемента нет
    return -1;
}

let massiv = [ 1, 3, 5, 7, 9, 11, 13, 15, 17];

console.log(binarySearch(massiv, 17))