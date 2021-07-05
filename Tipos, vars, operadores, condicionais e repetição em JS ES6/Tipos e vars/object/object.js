let user = {
    name: "Luigi"
};

// Alterando propriedade de um objeto
user.name = "Lu";
console.log(user);

user['name'] = "Lu2";
console.log(user);

const prop = "name";
user[prop] = "Lu3";
console.log(user);

// Criando uma propriedade 
user.lastName = "Luigi Belanda";
console.log(user);

// Deletando propriedades
delete user.name;
console.log(user);