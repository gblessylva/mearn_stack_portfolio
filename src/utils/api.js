import axios from "axios"
const host = "http://localhost:8080"
class API {
    login = (email, pass, success) =>{
        axios.postt(`${host}/api/users/login`, {params :{email:email, password:pass}})
        .then(res =>{
            success(res)
        })
    }
}
export default API