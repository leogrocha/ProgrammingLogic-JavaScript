const requestOptions = {
    headers: {
        "Accept": "application/json, text/javascript, /; q=0.01",
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json; charset=UTF-8'
    },
    method: 'GET',
    body: JSON.stringify(),
    redirect: 'follow',
    cache: 'no-cache'
};

const BASE_URL = "https://api.github.com/users/leogrocha";

function get_data() {
    try {
        fetch(BASE_URL, requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    } catch (error) {
        console.log('error', error);
    }
}

get_data();