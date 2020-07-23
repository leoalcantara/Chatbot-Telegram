const Youtube = require('youtube-node');
const config = require('./youtube-config');

const youtube = new Youtube();

youtube.setKey(config.key);

youtube.search('Exercícios em Casa', 10, function(error, result){
    if(!error){
        console.log(JSON.stringify(result, null, 2));
    } else {
        console.log('Deu erro!');
    }
});