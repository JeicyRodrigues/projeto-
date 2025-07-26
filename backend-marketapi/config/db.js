const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOURI);
        console.log('MongoDb conectado com sucesso');

    }catch (err){
        console.error('Erro na conexão:',err.message);
        process.exit(1);
    }
}
module.export = connectDB;
