
module.exports = class Transform {

    transformCollaction(items) {
       if(this.withPaginateStatus){
           return {
              ...this.paginate(items),
               [this.CollactionName()]:items.docs.map(this.transform.bind(this))
           }
       }
        return items.map(this.transform.bind(this))
    }
    paginate(items){
        return {
            page:items.page,
            pages:items.pages,
            limit:items.limit,
        }
    }
    CollactionName(){
        return 'items';
    }
    withPaginate(){
        this.withPaginateStatus = true;
        return this;
    }
}