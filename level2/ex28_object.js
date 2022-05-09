let family = {

    adress: "Seoul",
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadCount: function() {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, "jinseok", 'dad');
family.addFamily(26, "chloe", 'mom');
console.log(family.getHeadCount());

let printMembers = () => {
    let members = family.members;
    for (role in members) {
        console.log(`role => ${role}, name => ${members[role].name}`)
    }
}