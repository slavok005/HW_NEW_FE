CREATE TABLE products (
    product_id int primary key auto_increment,
    name varchar(128) not null,
    category varchar(128),
    created_at timestamp default current_timestamp
    );