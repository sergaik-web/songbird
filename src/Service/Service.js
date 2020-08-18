import db from '../DB/DB';

export default class Service {
  async getInfoBirds(birdName, classBirds) {
    return db[classBirds].filter(item => item.ruName === birdName )[0];
  }

  async getAudioBird(birdName, classBirds) {
    const engName = db[classBirds].filter(item => item.ruName === birdName)[0].engName;
    const url = `https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=${engName}`;
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async getOtherBirds() {
    return await this.getDataDb("otherBirds");
  }

  async getAllBirds() {
    return await this.getDataDb();
  }
};