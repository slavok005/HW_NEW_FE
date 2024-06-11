 1 уровень сложности: В рамках БД "песочница: интернет-магазин":

Вывести товары, добавив поле цена со наценкой Price_up в случае, если:

цена от 200 EUR — наценка 0.5%

цена от 20 EUR — наценка 1.5%
SELECT 
    ProductID,
    ProductName,
    Price,
    CASE 
        WHEN Price >= 200 THEN Price * 1.005
        WHEN Price >= 20 THEN Price * 1.015
        ELSE Price
    END AS Price_up
FROM 
    Products;
    
//----------------------------
CREATE TABLE products (
    product_id int primary key auto_increment,
    name varchar(128) not null,
    category varchar(128),
    created_at timestamp default current_timestamp
    );