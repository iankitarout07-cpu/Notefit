import userRepository from '../repositories/user.repository.js';
import hashPassword from '../utils/hasingpassword.js';
class AuthService {
    async registerUser(name, email, password) {
        const userExists = await userRepository.existsByEmail(email);
        if (userExists) {
            throw new Error('User with this email already exists');
        }
        //hash the password
        const hashedPassword = await hashPassword(password);
        //create the user
        const user = await userRepository.createUser({
            name,
            email,
            password: hashedPassword
        });
        return user;
        console.log('User registered successfully');    
    }
}

export default new AuthService();
