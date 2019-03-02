const nconf = require('nconf');

nconf.argv().env().file('keys.json');
const pass = nconf.get('mongoPass');
module.exports = {
  DB: `mongodb://dvp137:${pass}@cluster0-shard-00-00-pygfe.gcp.mongodb.net:27017,cluster0-shard-00-01-pygfe.gcp.mongodb.net:27017,cluster0-shard-00-02-pygfe.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`,
};