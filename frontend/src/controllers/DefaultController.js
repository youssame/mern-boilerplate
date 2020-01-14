require('dotenv').config();
const axios = require('axios')
const api_uri = process.env.API_URI

const signUp = async ( username ) => {
    return await axios.post(`${api_uri}/sign-up`, { username })
      .then(
        res => {
            if(res.res)
                return true;
            return false
        },
        err => {
            console.error(err);
            return false
        }
      )

}

const Default = { signUp }
export default Default