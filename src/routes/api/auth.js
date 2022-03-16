export async function get() {

    //id if authenticated or false
    let auth = 'abc123';

    return {
        body: { auth: auth }
    };

}