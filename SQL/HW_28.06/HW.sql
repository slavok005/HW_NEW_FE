-- Вывести страны, в которых ко-во клиентов от 10 до 20 (вкл.)
SELECT country, COUNT(*) AS client_count
FROM Customers
GROUP BY country
HAVING client_count BETWEEN 10 AND 20
ORDER BY country;




-- Вывести ТОП-3 стран по ко-ву клиентов
SELECT country, COUNT(*) AS client_count
FROM clients
GROUP BY country
ORDER BY client_count DESC
LIMIT 3;

-- Вывести имена клиентов, у которых два и более заказов
SELECT CustomerName, COUNT(*) AS Order_count
FROM Customers
JOIN Orders  ON Customers.CustomerID = Orders.OrderID
GROUP BY CustomerName
HAVING COUNT(OrderID) >= 2;