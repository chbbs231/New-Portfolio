const {Contact} = require('../models')

module.exports = app => {

    app.post('/contacts',(req,res) =>{
        Contact.create(req.body)
        .then(contact => res.json(contact)
        )
        .catch(e => console.error(e))
    })
}