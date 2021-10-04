
module.exports = class Transform {

    transformCollaction(items) {
        console.log(this);
        return items.map(this.transform)
    }
}