-- Вывести страны, в которых ко-во клиентов от 10 до 20 (вкл.)

SELECT Country
FROM Customers
GROUP BY country
HAVING COUNT (CustomerID) BETWEEN 10 AND 20;

-- Вывести ТОП-3 стран по ко-ву клиентов
SELECT Country,
COUNT(CustomerID) AS Customer.Count
FROM Customers
GROUP BY Country
ORDER BY Customer.Count DESC
LIMIT 3;

Вывести имена клиентов, у которых два и более заказов
SELECT c.customer_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name
HAVING COUNT(o.order_id) >= 2;


SELECT users.fullname
FROM users 
JOIN posts  ON users.id = posts.author_id;