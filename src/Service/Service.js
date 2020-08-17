import db from '../DB/DB';

export default class Service {
  async getInfoBirds(birdName, classBirds) {
    db[classBirds].filter(item => item.ruName === birdName ? console.log([item.url, item.info]) : console.log("false"))
  }

  async getForestBirds() {
    return await this.getDataDb("forestBirds");
  }

  async getOtherBirds() {
    return await this.getDataDb("otherBirds");
  }

  async getAllBirds() {
    return await this.getDataDb();
  }
};