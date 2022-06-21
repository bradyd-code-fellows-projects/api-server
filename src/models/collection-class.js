'use strict';

class collectionClass {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      let instance = await this.model.create(json);
      return instance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async get(id) {
    try {
      let oneRecord = await this.model.findOne({ where: { id } });
      return oneRecord;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async update() {

  }

  async delete() {

  }


}

module.exports = collectionClass;