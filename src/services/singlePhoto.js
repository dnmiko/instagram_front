import axios from 'axios';
import getToken from '../resolvers/getToken';
import constants from '../const';

export default (id) => {

    return axios({
        url: constants.url + 'graphql',
        method: 'post',
        data: {
            query: `
                query{
                    singlePhoto(
                        id: "${id}"
                    )
                    {
                        _id,
                        owner{
                            user_name,

                        },
                        uploaded_at,
                        description,
                        location, 
                        url
                    }
                }
            `
        },
        headers: {
            'Authorization': 'JWT ' + getToken()
        }
    })
}