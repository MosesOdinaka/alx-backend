import redis from 'redis';
import { promisify } from 'util';


const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);


client.on('connect', function() {
    console.log('Redis client connected to the server');
});


client.on('error', function(err) {
    console.log('Redis client not connected to the server: ${err.message}');
});


function setNewSchool(schoolName, value) {
    client.set(schoolName, value, function(err, reply) {
        redis.print(err, reply);
    });
}


async function displaySchoolValue(schoolName) {
    const value = await getAsync(schoolName);
    console.log(value);
}


displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

