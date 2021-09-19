import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {

    const users = [
        {id: 1, name : 'Fabiano'},
        {id: 2, name : 'Pedro'},
        {id: 3, name : 'Lucas'},
        {id: 4, name : 'Claudinei'},
    ];

    return response.json(users);

}
