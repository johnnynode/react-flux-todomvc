import {ReduceStore} from 'flux/utils';

import Constants from '../Constants';
import Dispatcher from '../Dispatcher';
import Utils from '../Utils';

class Store extends ReduceStore {
  getInitialState() {
    return []; // 默认return值
  }
  
  // 这里就是一个todos
  reduce(data, action) {
    switch(action.type) {
      case Constants.toggleItem:
        return Utils.toggleItemList(data, action.id);
      case Constants.delItem:
        return Utils.delItemList(data, action.id);
      case Constants.createItem:
        return Utils.createItem(data, action.title);
      case Constants.editItem:
        return Utils.editItemList(data, action.id, action.title);
      case Constants.loadData:
        return action.data;
      default:
        return data;
    }
  }
}

export default new Store(Dispatcher);