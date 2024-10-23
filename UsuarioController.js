const express = require('express');
const router = express.Router();
const { randomUUID } = require('crypto');
const pessoas = [
    { id: "asd", nome: 'Pessoa 1', celular: "15 991979668" },
]

router.use(express.json());


router.get("/pessoas", (req, res) => {
    return res.json(pessoas);
})
    
router.post('/pessoas', (req, res) => {
    const { nome, celular } = req.body;
    const id = randomUUID();

    pessoa = {
        id: id,
        nome: nome,
        celular: celular
    }
    
    pessoas.push(pessoa);

    return res.json(pessoas);
});


router.put("/pessoas/:id", (req, res) => {
    const { id } = req.params;
    const { nome, celular } = req.body;
    const index = pessoas.findIndex((p) => p.id === id);
    pessoas[index] = {id: id, nome: nome, celular: celular}

    return res.json(pessoas[index])
});

router.delete("/pessoas/:id", (req, res) => {
    const { id } = req.params;
    const index = pessoas.findIndex((p) => p.id === id);
    pessoas.splice(index, 1);

    return res.json(pessoas)
});

module.exports = router;