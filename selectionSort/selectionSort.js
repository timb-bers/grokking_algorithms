function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        // Находим наименьшее число в правой части массива
        let min = i;
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j; 
            }
         }
         if (min != i) {
             // Заменяем элементы
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
        console.log(min)
    }
    return arr;
} 

let massiv = [5, 12, 99, 0, 3, 1, 51, 44, 7, 2, 4, 21];

console.log(selectionSort(massiv))