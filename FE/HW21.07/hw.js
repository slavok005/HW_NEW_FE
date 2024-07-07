// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.


// class Permissions {
//     constructor() {
//         this.create = false;
//         this.read = true;
//         this.update = false;
//         this.remove = false;
//     }
// }

// class Users extends Permissions {
//     constructor(name) {
//         super();
//         this.name = name; 
//     }
// }



// Создайте класс Object2. в котором будет определен статический метод entries().
// Метод должен будет получить в качестве аргумента объект и вернуть результат, аналогичный результату работы метода Object.entries(). 
// В решении использовать методы объекта Object нельзя. 

// * Доп задание 
// К данному классу добавьте метод asign(), который будет реализован по такому же принципу, как вышеуказанный метод. Перед выполнением необходимо разобраться в особенностях работы метода.


// class Object2 {
//     static entries(obj) {
//         const result = [];
//         for (const key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 result.push([key, obj[key]]);
//             }
//         }
//         return result;
//     }

//     static asign(target, ...sources) {
//         for (const source of sources) {
//             for (const key in source) {
//                 if (source.hasOwnProperty(key)) {
//                     target[key] = source[key];
//                 }
//             }
//         }
//         return target;
//     }
// }


// Задача: Пользователи и Премиум-пользователи
// Создайте систему классов для управления пользователями и премиум-пользователями с различными функциями.

// Требования к классу User
// Свойства класса User:
// username (строка): Имя пользователя.
// email (строка): Электронная почта пользователя.
// isLoggedIn (логическое значение): Флаг, указывающий, что пользователь вошел в систему. Изначально false.
// Методы класса User:
// login(): Метод должен установить isLoggedIn в true и возвращать строку "User <имя пользователя> logged in".
// logout(): Метод должен установить isLoggedIn в false и возвращать строку "User <имя пользователя> logged out".
// updateEmail(newEmail): Метод должен обновить email пользователя на newEmail и возвращать строку "User <имя пользователя> updated email to <новый email>".


// Требования к классу PremiumUser
// Свойства класса PremiumUser:
// Должен наследовать все свойства класса User.
// subscriptionEndDate (объект Date): Дата окончания подписки премиум-пользователя.
// Методы класса PremiumUser:
// Должен наследовать все методы класса User.
// accessPremiumContent(): Метод должен возвращать строку "Accessing premium content for user <имя пользователя>".
// extendSubscription(days): Метод должен принимать количество дней (days), добавлять эти дни к subscriptionEndDate и возвращать строку "Subscription extended by <days> days".
// viewSubscriptionStatus(): Метод должен возвращать строку "Subscription for user <имя пользователя> ends on <дата окончания подписки>".

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.isLoggedIn = false;
    }

    login() {
        this.isLoggedIn = true;
        return `User ${this.username} вошел в систему`;
    }

    logout() {
        this.isLoggedIn = false;
        return `User ${this.username} вышли из системы`;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
        return `User ${this.username} обновлено электронное письмо ${newEmail}`;
    }
}

class PremiumUser extends User {
    constructor(username, email, subscriptionEndDate) {
        super(username, email);
        this.subscriptionEndDate = new Date(subscriptionEndDate);
    }

    accessPremiumContent() {
        return `Доступ к премиум-контенту для пользователя ${this.username}`;
    }

    extendSubscription(days) {
        this.subscriptionEndDate.setDate(this.subscriptionEndDate.getDate() + days);
        return `Подписка продлена на ${days} days`;
    }

    viewSubscriptionStatus() {
        return `Подписка для пользователя ${this.username} ends on ${this.subscriptionEndDate.toDateString()}`;
    }
}
const user1 = new User('john_doe', 'john@example.com');
console.log(user1.login()); 
console.log(user1.updateEmail('john.doe@example.com'));
console.log(user1.logout()); 