
1.Вывести данные о товарах (проекция: название, ценасоскидкой0.5процента) по убыванию цены.
SELECT
ProductName,
Price,
Price * 0.995 AS  Price_down
FROM Products
ORDER BY Price DESC

2.Вывести товары в диапазоне цены от 50 до 200 EUR (проекция: название, ценаснаценкой30процентов) по возрастанию цены.
SELECT 
ProductName,
Price,
Price * 1.3 AS Price_up
FROM Products
WHERE
	Price BETWEEN 50 AND 200
    ORDER BY Price ASC
3Вывести всех клиентов, кроме тех, что из USA и UK.
SELECT * 
FROM Customers
WHERE
Country NOT IN ('USA', 'UK')
Вывести товары из категорий 2 и 5 (проекция: всеимеющиесяполя, ценавдолларах)
SELECT
ProductName,
CategoryID,
Price,
Price * 1.07 AS Price_$
FROM Products
WHERE
CategoryID IN (2, 5)
ORDER BY Price ASC           Последнее усовершенствовал для красоты глаз.
