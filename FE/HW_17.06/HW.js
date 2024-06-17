
// Решите список задач, используя конструкцию async/await.
// В решении задач вам потребуется отправлять несколько запросов для верной фильтрации данных

// Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя (api /users) и выводит список его задач (api /todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя

// Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок поста (api /posts) и выводит список всех его комментариев (api /comments).
// В качестве ответа в консоль выведите массив с комментариями. Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.

// Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм пользователя (api /users) и выводит все его фотографии (api /photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

//--------------1--------------------
// async function getName(username) {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//             throw new Error('Failed to fetch users');
//         }
//         let users = await response.json();
//         return users.find(user => user.username === username);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         return null;
//     }
// }
// async function getId(userId) {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         if (!response.ok) {
//             throw new Error('Failed to fetch todos');
//         }
//         let todos = await response.json();
//         return todos.filter(todo => todo.userId === userId);
//     } catch (error) {
//         console.error('Error fetching todos:', error);
//         return [];
//     }
// }
// async function getTodos(username) {
//     try {
//         const user = await getName(username);
//         if (!user) {
//             console.log('User not found');
//             return;
//         }
//         const todos = await getId(user.id);
//         console.log(`Todos for ${username}:`, todos);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// getTodos('Bret');

//-------------------------------------2-----------------
// async function getPostByTitle(title) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//             throw new Error('Failed to fetch posts');
//         }
//         const posts = await response.json();
//         return posts.find(post => post.title === title);
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         return null;
//     }
// }

// // Функция для получения комментариев по идентификатору поста
// async function getCommentsByPostId(postId) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//         if (!response.ok) {
//             throw new Error('Failed to fetch comments');
//         }
//         const comments = await response.json();
//         return comments.filter(comment => comment.postId === postId);
//     } catch (error) {
//         console.error('Error fetching comments:', error);
//         return [];
//     }
// }

// // Основная функция для получения и вывода списка комментариев по заголовку поста
// async function getComments(title) {
//     try {
//         const post = await getPostByTitle(title);
//         if (!post) {
//             console.log('Post not found');
//             return;
//         }
//         const comments = await getCommentsByPostId(post.id);
//         if (comments.length === 0) {
//             console.log('No comments for this post');
//         } else {
//             console.log(`Comments for the post titled "${title}":`, comments);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }


// getComments('qui est esse');

//-----------------------------3---------------
async function getUserByUsername(username) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();
        return users.find(user => user.username === username);
    } catch (error) {
        console.error('Error fetching users:', error);
        return null;
    }
}

// Функция для получения всех фотографий пользователя по его userId
async function getPhotosByUserId(userId) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }
        const photos = await response.json();
        // Предполагается, что userId соответствует albumId в данных photos
        return photos.filter(photo => photo.albumId === userId);
    } catch (error) {
        console.error('Error fetching photos:', error);
        return [];
    }
}

// Основная функция для получения и вывода списка фотографий пользователя по никнейму
async function getPhotoByNickName(username) {
    try {
        const user = await getUserByUsername(username);
        if (!user) {
            console.log('User not found');
            return;
        }
        const photos = await getPhotosByUserId(user.id);
        if (photos.length === 0) {
            console.log('No photos for this user');
        } else {
            console.log(`Photos for ${username}:`, photos);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Пример использования функции getPhotoByNickName
getPhotoByNickName('Bret');