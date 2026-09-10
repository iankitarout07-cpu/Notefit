import user from '../models/user.model.js';

class UserRepository {
    async createUser(userData) {
        return await user.create(userData);
    }
    async findUserById(id) {
        return await user.findById(id);
    }
    async findUserByEmail(email) {
        return await user.findOne({ email });
    }
    async existsByEmail(email) {
        return await user.exists({ email });
    }
}
export default new UserRepository();
