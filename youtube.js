const Youtube = require('youtube-node');
const config = require('./youtube-config');

const youtube = new Youtube();

youtube.setKey(config.key);

youtube.search('Exercícios de braços em Casa', 2, function(error, result){
    if(!error){
        console.log(JSON.stringify(result, null, 2));        
    } else {
        console.log('Deu erro!');
    }
});