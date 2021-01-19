const urlApi = 'http://hplussport.com/api/products.php';
// const urlApi = 'https://mlab.com/databases/mern_crud_db/collections/items';

function* getUsersFromApi() {
    const response = yield fetch(urlApi, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const users = yield response.status === 200 ? response.json() : []; //response.json()
    console.log('from Api:', users)
    return users;
}

export const Api = {
    getUsersFromApi,
} 