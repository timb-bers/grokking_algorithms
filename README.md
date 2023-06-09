# Задачи и упражения по книге "Грокаем алгоритмы"

## Мои заметки

### Сложность алгоритмов

Скорость алгоритмов измеряется не в секундах, а в темпе роста количества операций!!!

- O(1) - постоянное время, это когда размер передаваемых данных никак не влияет на его производительность. Время выполнения останется неизменным, какой бы набор данных ему ни передали, т.е, это может быть список из 5 элементов, а может быть и из тысячи — не важно. Алгоритм с такой нотацией очень масштабируемый. К примеру, у нас есть массив чисел и мы хотим найти второй элемент в этом списке. Не важно, насколько длинный наш список: поиск второго элемента всегда будет занимать одинаковое время.

- O(n) - линейное время, линейная временная сложность алгоритма означает, что время его работы находится в прямой зависимости от размера входящих данных. Если количество элементов наборе данных растет, пропорционально растет и время работы, пример простой поиск;

- O(log n) - логарифмическое время, если у алгоритма логарифмическая временная сложность, это значит, что время выполнения будет зависеть от логарифма размера входящих данных, пример бинарный поиск - мы шаг за шагом, делим набор данных надвое, пока не попадём в нужную точку;

- O(n * log n) - линейно-логарифмическое время, данная функция занимает промежуточное положение между линейной и логарифмической сложностью. В таком алгоритме тоже применяется подход «разделяй и властвуй», как в алгоритмах с логарифмической сложностью. пример "быстрая" сортировка, сортировка слиянием;

- O(n^2) - квадратичное время, когда производительность алгоритма прямо пропорциональна размеру входных данных в квадрате, т.е это линейная временная сложность в квадрате. Если, к примеру, в нашем наборе данных есть 2 элемента, за время работы алгоритма будет выполнено 4 операции. Если в наборе 4 элемента, то операций будет 16. При 6 элементах будет 36 операций, и так далее, пример сортировка выбором, сортировка пузырьком;

- O(2^n) - экспоненциальное время, экспоненциальную временную сложность мы можем наблюдать в алгоритмах, где количество вычислений удваивается при добавлении каждого нового элемента в набор данных. Так происходит, например, в брутфорс-решениях с использованием рекурсии. На маленьких наборах данных все работает отлично, но с увеличением числа элементов в наборе время выполнения может выйти из-под контроля, пример рекурсивный расчет чисел Фибоначчи.

- O(n!) - факториальное время, это когда количество вычислений в алгоритме прирастает факториально в зависимости от размера набора данных. Это, пожалуй, наихудший тип временной сложности, потому что количество операций возрастает до астрономических пределов даже при небольшом увеличении набора данных, примером может быть к примеру рекурсивная функция по расчету того же факториала.

### Связанные списки и массивы

При использовании связанных списков, элементы этого списка могу размещаться в памяти где угодно.

> При использовании массива, его элементы храняться в памяти один за одним, из здесь возникает трудность
> с добавлением новых элементов в массив и выделением ему памяти, т.к новый добавленый элемент массива его 
> расширит, и компьютеру придется выделять новый блок памяти, для того чтобы уместить уже новый массив. 

В связанном списке, в каждом его элементе хрянится адрес следующего элемента списка. Таким образом,
набор произвольных адресов памяти превращается в цепочку адресов.

Связанные списки отлично подходят в тех ситуациях, когда данные должны читаться последовательно или же работа
с ними должна осущствляться по порядку, если же нужно при работе с данными нужно будет прыгать туда сюда, лучше использовать
массивы (мы заранее будем знать адрес нужного нам элемента).

> В связанном списке просто так нельзя получить к примеру последний элемент, т.к нельзя узнать его адрес в памяти
> он храниться в предпоследнем элементе, а для того чтобы его узнать, придется перебрать последовательно весь список.

Связанный список лучше подходит, к примеру для вставки элемента в середину, нежели чем массив, т.к достаточно будет
изменить указатель (ссылку) на предыдущий элемент (в массиве приедется сдвигать остальные элементы вниз).
Также связанный список лучше подходит для удаления элемента, достаточно изменить указатель (ссылку) на предыдущий элемент
(в массиве приедтся сдивгать остальные элементы вверх).

> Массивы обеспечивают быстрое чтение.
> Списки обеспечивают быструю вставку и выполнение.

## Сортировка выбором

Сложность этого алгоритма O(n^2) - квадратичное время.

Суть этого алгоритма - за каждый проход по массиву выбрать минимальный элемент (для сортировки по возрастанию) и поменять его местами с первым элементом в еще не отсортированном участке массива, тем самым уменьшив длину этого участка на один, и так до тех пор пока не будут отсортированы все элементы.