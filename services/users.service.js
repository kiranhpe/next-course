import { User } from "../models/user";

const users = [
    {   userId: 1,  name: 'John',  age: 30,  status: 'active' },
    {   userId: 2,  name: 'Pete',  age: 35,  status: 'disabled' },
    {   userId: 3,  name: 'Mary',  age: 28,  status: 'active' },
    {   userId: 4,  name: 'Mike',  age: 33,  status: 'disabled' },
    {   userId: 5,  name: 'Vasya', age: 50,  status: 'active' }
];

export const getUsers = async() => {
    return User.find({})
};

export const getUserById = (id) => users.find(user => user.userId === id);