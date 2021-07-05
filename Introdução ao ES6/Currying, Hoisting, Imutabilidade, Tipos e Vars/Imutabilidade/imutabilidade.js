const user = {
    name: "Luigi",
    lastName: "Belanda"
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
console.log(user); // aqui vemos que o objeto ainda continua o mesmo

// com a imutabilidade não podemos alterar o tipo/valor da var
// apenas copiá-la e ai sim fazer as alterações
// nesta caso pegamos um objeto "user"
// e adicionamos uma nova propriedade nela "fullName"
