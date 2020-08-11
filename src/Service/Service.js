export default class Service {
  async getPredatorsBirds() {
    return await this.getDataDb("predatorsBirds");
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