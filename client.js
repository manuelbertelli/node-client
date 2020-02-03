const https = require('https');

const options = {
    host: '8080-c11332d2-3e96-4247-8940-0289cb1ddb6c.ws-us02.gitpod.io',
    path: '/',
    method: 'GET'
};

const req = https.get('https://8080-c11332d2-3e96-4247-8940-0289cb1ddb6c.ws-us02.gitpod.io/');

req.on('response', res => {
    console.log('Conectado a resposta!');
    res.on('data', chunk => {
        console.log('Mensagem recebida', chunk.toString());
    });
})
