import axios from '../../node_modules/axios';

const USER_API_BASE_URL = "http://localhost:8084/api/v1/users";

class UserService {

    createUser(user){
        console.log(user)
        return axios.post(USER_API_BASE_URL,user);
    }

}

export default new UserService()