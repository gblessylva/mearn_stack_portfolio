import api from '../../utils/api'

export const login = (email, pass) =>{

    return (disptach) =>{
        api.login(email, pass, res=>{
            console.log(res.data)
        })
        }
    }
    // return {
    //     type: 'LOGIN',
    //     payload: {email, pass}
    // }

export const register =(email, pass) =>{
    return {
        type: 'REGISTER',
        payload: {email, pass}
    }
}