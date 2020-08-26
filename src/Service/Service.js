import db from "../DB/DB";

export default class Service {
  async getInfoBirds(birdName, classBirds) {
    return db[classBirds].filter((item) => item.ruName === birdName)[0];
  }

  getAudioBird(birdName, classBirds) {
    const urlMp3 = db[classBirds].filter((item) => item.ruName === birdName)[0].mp3;
    return urlMp3;
  }

  getEngName(birdName, classBirds) {
    return db[classBirds].filter((item) => item.ruName === birdName)[0].engName;
  }
}
