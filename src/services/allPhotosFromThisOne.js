import axios from 'axios';
import constants from '../const';
import getToken from '../resolvers/getToken';

export default () => {

    return axios({
        url: constants.url + 'graphql',
        method: 'POST',
        data: {
            query: `
                query{
                    feed{
                        owner{
                            user_name,
                        },
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