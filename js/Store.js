import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react/native';

import { AsyncStorage, ListView } from 'react-native'
class Store {

  @observable nightMode = false;
  @observable size = 15;
  @observable isFav = false;
favDataSet = observable([]);

  toggleNightMode() {
    this.nightMode = !this.nightMode;
  }

  changeFontSize(size) {
    this.size = size;
  }
  //  @action
  removeFav = ttt => {

    newData = this.favDataSet.filter(function (el) {
      return el.title !== ttt;
    });
    AsyncStorage.setItem('kobitaDB', JSON.stringify(newData))

    this.favDataSet.replace(newData)
  }
  //  @action
  checkFavItem = title => {

    newData = this.favDataSet.filter(function (el) {
      return el.title == title;
    });

    if (newData.length > 0) {
      this.isFav = true
    } else {
      this.isFav = false
    }


  }


  addtoFav = ds => {
    this.favDataSet.push(ds)
    newData = this.favDataSet
    AsyncStorage.setItem('kobitaDB', JSON.stringify(newData))

  }

  updateAsync() {
    AsyncStorage.getItem('kobitaDB').then((data) => {
      if (data !== null) {
        d = JSON.parse(data)
        this.favDataSet.replace(d)
      }
      else{
        newData = []
        AsyncStorage.setItem('kobitaDB', JSON.stringify(newData))
      }
    })
  }


}

const store = new Store()
export default store
