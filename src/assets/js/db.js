const mongoose = require("mongoose");

//Congig Banco
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bancoCPD",
{ useUnifiedTopology: true }
).then(()=> {
    console.log("Cenectado com sucesso")
}).catch((err)=>{
    console.log("Erro ao se conectar: "+err)
})

// Models

const RegistroSchema = mongoose.Schema({
    funcionario:{
        type: String,
        require: true
    },

    cpd: {
        type: String,
        require: true
    },

    fazenda:{
        type: String
    },

    descricao:{
        type: String,
        require: true
    }

})

//Colection
mongoose.model('CPD', RegistroSchema)

const registro = mongoose.model('CPD')

new registro({
    funcionario: "Fualno",
    cpd: "Broca",
    fazenda: "Fazenda 1",
    descricao: "Foi encontrada na regiao tal do dia de verificação tal"
}).save().then(()=>{
    console.log("Registro criado com sucesso")
}).catch((err)=>{
    console.log("Houve um erro ao realizar o registro: "+err)
})