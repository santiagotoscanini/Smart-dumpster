const garbage = require('../model/garbage');

function getGarbageID(req, res) {
    let residuoId = req.params.residuoId;

    garbage.findById(residuoId, (err, garbage) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion : ${err}`});
        if(!garbage) return res.status(404).send({message: `No existe el producto`});

        res.status(200).send({garbage});
    });
};

function getGarbageNR(req, res) {
    // todo preguntar como hacer para llamar a uno especifico
    //let nombre_residuo = req.params.nombre_residuo;
    garbage.find({},{"nombre_residuo":1},(err, name) => {
        if(err){
            return res.status(500).send({message: `error al realizar la peticion : ${err}`});
        }
        res.json(name);
    });
};

function getGarbage(req, res) {
    garbage.find({}, (err, residuos) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion : ${err}`});
        if(!garbage) return res.status(404).send({message: `No existen productos`});
        res.send(200, {residuos})
    });
};

function saveGarbage(req, res){
    console.log('POST api/residuo');
    console.log(req.body);

    let residuo = new garbage();
    residuo.nombre_residuo = req.body.nombre_residuo;
    residuo.tipo_residuo = req.body.tipo_residuo;
    residuo.descripcion = req.body.descripcion;

    residuo.save((err, residuoStored) => {
        if(err) res.status(500).send({message: `error al almacenar datos : ${err}`})
        else  res.status(200).send({residuo: residuoStored})
    });
};


module.exports = {
    getGarbageID,
    getGarbage,
    getGarbageNR,
    saveGarbage
};




