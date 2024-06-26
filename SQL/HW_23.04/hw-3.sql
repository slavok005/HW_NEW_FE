 1 уровень сложности: В рамках БД "песочница" напишите след/запросы:

(1) Вывести данные о товарах (проекция: названиетовара, цена, названиекатегории, названиекомпаниипоставщика)
SELECT
Products.ProductName,
Products.Price, 
Categories.CategoryName,
Suppliers.SupplierName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID

(2) Вывести список стран, которые поставляют морепродукты
SELECT DISTINCT
Country 
FROM Suppliers
JOIN Products ON Suppliers.SupplierID =  Products.SupplierID
Where
CategoryID = 8


(3) Вывести два самых дорогих товара из категории Beverages из USA
SELECT
Products.ProductName,
Products.Price

FROM Products
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
WHERE Products.CategoryID = 1
AND Suppliers.Country = 'USA'
ORDER BY Products.Price DESC;
(4) Вывести название и стоимость в USD одного самого дорогого проданного товара
SELECT
	Products.ProductName,
	Products.Price * 1.07 Price_usd
FROM OrderDetails

JOIN Products ON Products.ProductID = OrderDetails.ProductID

ORDER BY Price DESC
LIMIT 1
(5) Дайте короткий ответ на вопрос: в чем отличие БД от СУБД

База данных (БД) - это организованная коллекция данных, а Система управления базами данных (СУБД) - это программное обеспечение, которое обеспечивает доступ, управление и обработку этих данных. Таким образом, основное отличие заключается в том, что БД представляет собой сами данные, в то время как СУБД представляет собой программное обеспечение для работы с этими данными.
