enum Role { ADMIN = 'ADMIN', READ_ONLY = 'READ_ONLY', AUTHOR = 'AUTHOR'};


const Person =  {
    name: "Dev",
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};






let favoriteActivities: string[];
favoriteActivities =['Sports'];

console.log(Person);

for(const hobby of Person.hobbies){
    console.log(hobby);
}
 