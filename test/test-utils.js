import bcrypt from 'bcrypt'
import User from '../models/user.js'

export const createUserTest = async () => {
    const password = await bcrypt.hash('rahasia',10)
    return User.create({
        username: 'test',
        password: password,
        email: 'email@gmail.com',
        token: 'test'
    })
}

export const deleteUserTest = async () => {
    return User.destroy({
        where: {
            username: 'test'
        }
    })
}

export const getUserTest = async () => {
    return User.findOne({
        where: {
            username: 'test'
        }
    })
}
