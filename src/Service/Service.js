export default class Service {
  key = '4cdc79b328bab4c3a90e5c1577952e6a';
  async getInfoBirds(birdName) {
    let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
    xhr.open('GET', `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=
      ${this.key}&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=${birdName}`);

// 3. Отсылаем запрос
    xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function() {
      if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
      } else { // если всё прошло гладко, выводим результат
        alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
        console.log(xhr.response);
      }
    };

    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        alert(`Получено ${event.loaded} из ${event.total} байт`);
      } else {
        alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
      }

    };

    xhr.onerror = function() {
      alert("Запрос не удался");
    };

    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=
      ${this.key}&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=${birdName}`;

    try {
      const res = await fetch(url);
      await console.log(res);
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  test() {
    console.log('test')
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