1.Вывести общее ко-во поставщиков не из UK и не из China

SELECT 
COUNT(*) AS TotalSuppliers
FROM Suppliers
WHERE
Country NOT IN ('UK', 'China');

2.Вывести среднюю/MAX/MIN стоимости и ко-во товаров из категорий 3 и 5
SELECT
COUNT(*) AS total_products,
MAX(Price) AS max_price,
MIN(Price) AS min_price,
AVG(Price) AS avg_price
FROM Products
WHERE
CategoryID IN (1, 3)

3.Вывести общую сумму проданных товаров
SELECT 
SUM(Price * Quantity) AS total_cost
FROM OrderDetails
JOIN Products ON Products.ProductID = OrderDetails.ProductID

4.Вывести данные о заказах (номерзаказа, имяклиента, странаклиента, фамилияменеджера, названиекомпанииперевозчика)
OrderID,
CustomerName,
Country,
LastName AS LastNameEmployee,
ShipperName
FROM Orders
JOIN Customers ON Customers.CustomerID = Orders.CustomerID
JOIN Employees ON Employees.EmployeeID = Orders.EmployeeID
JOIN Shippers ON Shippers.ShipperID = Orders.ShipperID

5.Вывести сумму, на которую было отправлено товаров клиентам в Germany
SELECT
SUM(Orders.CustomerID) AS TotalGermany
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
WHERE Customers.Country = 'Germany'