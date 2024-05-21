--1)Вывести заказы со стоимостью от 5000 и более EUR (проекция: номер_заказа, стоимость_заказа)
SELECT Orders.OrderID, SUM(Products.Price * OrderDetails.Quantity) AS 'total_sum'
FROM Orders
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
JOIN Products ON OrderDetails.ProductID = Products.ProductID
GROUP BY Orders.OrderID
HAVING total_sum >= 5000;

--2)Вывести страны, в которые было отправлено 3 и более заказов
SELECT
Customers.Country,
COUNT(Orders.OrderID) AS total_orders
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
GROUP BY Customers.Country
HAVING total_orders >= 3;
--3)Вывести ТОП-10 самых продаваемых товаров (проекция: название_товара, ко_во_проданных_единиц)
SELECT
    Products.ProductName,
    SUM(OrderDetails.Quantity) AS top_products
FROM OrderDetails
JOIN Products ON OrderDetails.ProductID = Products.ProductID
GROUP BY Products.ProductName
ORDER BY top_products DESC
LIMIT 10;