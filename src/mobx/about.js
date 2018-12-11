import { observable, action } from 'mobx';


class AboutStore {
    @observable title = 'about page 页面头部'
    @observable list = ['1','2']
    @action.bound add (data) {
        data && this.list.push(data)
    }
    @action.bound removelist (data) {
        let $index = this.list.indexOf(data);
        this.list.splice($index,1)
    }
}


export default new AboutStore();