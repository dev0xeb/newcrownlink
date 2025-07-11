import * as userRepository from '../repositories/userRepository';

export async function getAllUsers(){
    return userRepository.findAllUsers();
}