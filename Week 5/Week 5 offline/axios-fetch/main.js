// this file is for http dump request 

const axios = require("axios");

async function main(){
    // request config
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/26c50a2d-2721-4890-9ed2-6e8c66fec146",
            method: "POST",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "iamkaifyyy"
            }
        },
    );
    console.log(response.data)
}

main(); 