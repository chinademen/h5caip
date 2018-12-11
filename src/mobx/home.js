import { observable,action,runInAction } from 'mobx';
import HomeApi from '../api/home';

class HomeStore {
    @observable  list = [];
    @action async getList() {
        const  data = await HomeApi.getList();
        runInAction(()=>{
            this.list = data
        })
    }
}
export default new HomeStore();



