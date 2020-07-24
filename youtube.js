const Youtube = require('youtube-node');
const config = require('./youtube-config');

const youtube = new Youtube();

youtube.setKey(config.key);

function searchVideoURL(message, queryText) {
    return new Promise((resolve, reject) =>{
        youtube.search(` Exercícios para ${queryText} em Casa `, 2, function(error, result){
            if(!error){
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);
                resolve(`${message} ${youtubeLinks.join(', ')}`);     
            } else {
                console.log('Deu erro!');
            }
        });
    });  
};

module.exports.searchVideoURL = searchVideoURL;