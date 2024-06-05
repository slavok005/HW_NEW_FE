// def binary_search(arr, target, low, high):
//     if low > high:
//         return -1  

//     mid = (low + high) // 2

//     if arr[mid] == target:
//         return mid
//     elif arr[mid] > target:
//         return binary_search(arr, target, low, mid - 1)
//     else:
//         return binary_search(arr, target, mid + 1, high)

// // # Пример использования
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// target = 7

// result = binary_search(arr, target, 0, len(arr) - 1)

// if result != -1:
//     print(f"Элемент найден на индексе {result}")
// else:
//     print("Элемент не найден")