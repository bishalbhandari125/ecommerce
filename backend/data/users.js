import bcrypt from 'bcryptjs'
const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        //since we should do this asyncronously this is data imported so, it doesn't matter
        password:bcrypt.hashSync('123456', 10) ,
        isAdmin: true
    },
    {
        name:'John Doe',
        email:'john@example.com',
        password: bcrypt.hashSync('123456', 10) ,

    },
    {
        name:'Jane Doe',
        email:'jane@example.com',
        password: bcrypt.hashSync('123456', 10) ,
    },
]

export default users