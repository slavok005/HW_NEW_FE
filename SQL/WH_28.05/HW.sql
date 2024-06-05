 1 уровень сложности: В рамках БД "видео-хостинг":


Создать таблицы реакций и комментариев (на видео)
CREATE TABLE videos (
    video_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE reactions (
    reaction_id SERIAL PRIMARY KEY,
    video_id INT NOT NULL,
    user_id INT NOT NULL,
    reaction_type VARCHAR(50) NOT NULL,
    reaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (video_id) REFERENCES videos(video_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) -- Предполагаем, что существует таблица users
);


Добавление записей в таблицу видео (videos)
Copy code
INSERT INTO videos (title, description) VALUES 
('First Video', 'This is the description of the first video.'),
('Second Video', 'This is the description of the second video.'),
('Third Video', 'This is the description of the third video.');


для реакции
INSERT INTO reactions (video_id, user_id, reaction_type) VALUES 
(1, 1, 'like'),
(1, 2, 'dislike'),
(2, 1, 'like'),
(3, 3, 'like'),
(2, 3, 'dislike');












Добавление записей в таблицу комментариев (comments)
INSERT INTO comments (video_id, user_id, comment_text) VALUES 
(1, 1, 'Great video!'),
(1, 2, 'I did not like this video.'),
(2, 3, 'Interesting content.'),
(3, 1, 'Looking forward to more videos like this.'),
(3, 2, 'Nice job!');
Полный SQL-запрос для добавления записей в каждую таблицу

-- Добавление записей в таблицу пользователей
INSERT INTO users (username, email, password) VALUES 
('john_doe', 'john@example.com', 'password123'),
('jane_smith', 'jane@example.com', 'password456'),
('alice_jones', 'alice@example.com', 'password789');

-- Добавление записей в таблицу видео
INSERT INTO videos (title, description) VALUES 
('First Video', 'This is the description of the first video.'),
('Second Video', 'This is the description of the second video.'),
('Third Video', 'This is the description of the third video.');

-- Добавление записей в таблицу реакций
INSERT INTO reactions (video_id, user_id, reaction_type) VALUES 
(1, 1, 'like'),
(1, 2, 'dislike'),
(2, 1, 'like'),
(3, 3, 'like'),
(2, 3, 'dislike');

-- Добавление записей в таблицу комментариев
INSERT INTO comments (video_id, user_id, comment_text) VALUES 
(1, 1, 'Great video!'),
(1, 2, 'I did not like this video.'),
(2, 3, 'Interesting content.'),
(3, 1, 'Looking forward to more videos like this.'),
(3, 2, 'Nice job!');