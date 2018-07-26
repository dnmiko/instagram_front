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
                    allPhotos{
                        _id,
                        owner{
                            _id,
                            user_name,
                            name,
                            profile_picture,
                            is_active
                        }
                        description,
                        location,
                        url,
                        is_active
                    }
                }
            `
        },
        headers: {
            'Authorization': 'JWT ' + getToken()
        }
    })

}