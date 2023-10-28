/**console.log ('Hola mundo');**/
import express from 'express';
import mongoose from 'mongoose';
import routers from './routers/procesoRouters.js';

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(routers);
async function main() {
    try {
        await mongoose.connect('mongodb+srv://crispi:la10@cluster0.cv3bpug.mongodb.net/proyeSterilization');
        
        server.listen(PORT, () => {
            console.log(`Server up in http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
