import db from "../DB/DB";

export default class Service {
  async getInfoBirds(birdName, classBirds) {
    return db[classBirds].filter((item) => item.ruName === birdName)[0];
  }

  getAudioBird(birdName, classBirds) {
    console.log(birdName, classBirds);
    console.log(db[classBirds].filter((item) => item.ruName === birdName)[0]);
    const urlMp3 = db[classBirds].filter((item) => item.ruName === birdName)[0].mp3;
    return urlMp3;
  }

   getAudioUrl() {
    for (let key in db){
      db[key].map( (item)=>{
        console.log(item.mp3)
      })
    }
  }

  getEngName(birdName, classBirds) {
    return db[classBirds].filter((item) => item.ruName === birdName)[0].engName;
  }
}
