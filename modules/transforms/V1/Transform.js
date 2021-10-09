
module.exports = class Transform {

    transformCollaction(items) {
       
        return items.map(this.transform.bind(this))
    }
}