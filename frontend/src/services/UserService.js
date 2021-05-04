import axios from '../../node_modules/axios';

const USER_API_BASE_URL = "http://localhost:8084/api/v1";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class UserService {

    createUser(user){
        console.log(user)
        return axios.post(USER_API_BASE_URL.concat("/users"),user);
    }

    createAd(advertisement)
    {
        console.log(advertisement)
        return axios.post(USER_API_BASE_URL.concat("/adv"),advertisement);
    }

    validateUser = async (email,password) => {

        const USER_API_BASE_URL = "http://localhost:8084/api/v1/users";
          
        const response = await axios.get(USER_API_BASE_URL + '/' + email);
          
        let res = response.data;

        if(res.password == password)
        {
            let data = {email:res.emailId, password:res.password, id:res.id , userType:res.userType};
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,JSON.stringify(data));
            sessionStorage.setItem("id",res.id);
            console.log(res.id);
            return true;
        }
        else{
            return false;
        }
      }
      isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        if(user.email == null) return false;
        else return true;
    }

    getLoggedInUserId() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user.email == null) return '';
        else return user.id;

    }
    getAllAds = async () => {

        let id = sessionStorage.getItem("id");
        const USER_API_BASE_URL = "http://localhost:8084/api/v1/adv";
          
        const response = await axios.get(USER_API_BASE_URL+"/"+id);
          
        let list = response.data;
        return list;
    }
}

export default new UserService()