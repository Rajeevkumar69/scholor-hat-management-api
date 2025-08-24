class BaseRepositry {
     constructor(_collection) {
          this.collection = _collection;
     }

     findAll() {
          return this.collection.find().lean().exec();
     }

     findById(id) {
          return this.collection.findById(id);
     }

     create(model) {
          return this.collection.create(model);
     }

     update(id, model) {
          return this.collection.findByIdAndUpdate(id, model, { new: true });
     }

     deleteById(id) {
          return this.collection.findByIdAndDelete(id);
     }
}

export default BaseRepositry;
