-- уровень сложности: В рамках БД audiohosting:


-- Создать таблицу комментариев (comments) с использованием механизма валидации данных в SQL

CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES posts(post_id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT chk_content_length CHECK (CHAR_LENGTH(content) >= 10 AND CHAR_LENGTH(content) <= 500)
);


-- Добавить в таблицу комментариев несколько записей

INSERT INTO comments (post_id, user_id, content)
VALUES 
    (1, 2, 'This is a great post! I really enjoyed reading it.'),
    (1, 3, 'Thank you for sharing this information. Very helpful!'),
    (2, 4, 'I have a question about this topic. Can someone help?'),
    (2, 2, 'Great insights! Looking forward to more posts like this.'),
    (3, 5, 'I disagree with the points made in this post. Here is why...');



-- Вывести ко-во комментариев на каждый трек (в упорядоченном виде)
SELECT post_id, COUNT(comment_id) AS comment_count
FROM comments
GROUP BY post_id
ORDER BY comment_count DESC;