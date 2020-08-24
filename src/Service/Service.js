import db from "../DB/DB";

export default class Service {
  async getInfoBirds(birdName, classBirds) {
    return db[classBirds].filter((item) => item.ruName === birdName)[0];
  }

  async getAudioBird(birdName, classBirds) {
    const engName = db[classBirds].filter((item) => item.ruName === birdName)[0]
      .engName;
    const url = `https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=${engName}`;
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (err) {
      alert(
        "Данное приложение написано с использование API для получения аудио файлов. Если вы видите это сообщение" +
          "то данная Ошибка вызвана превышением количества запросов по этому API, либо удалённый сервер временно недоступен " +
          "Попробуйте повторить попытку позже. Подробности ошибки выведены в консоль"
      );
      console.log(err);
    }
  }

  getEngName(birdName, classBirds) {
    return db[classBirds].filter((item) => item.ruName === birdName)[0].engName;
  }
}
