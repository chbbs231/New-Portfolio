module.exports = ( model, Schema) => {
    const Contact = new Schema ({
        name: String,
        email: String,
        comment: String,
    })
    return model ('Contact', Contact)
}
