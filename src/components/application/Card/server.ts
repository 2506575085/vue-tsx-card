import { incard } from ".";
import {Service} from "vue-server-typedi"
import Store from "@/components/core/Store";
import { MessageBox ,Message} from "element-ui";
const {confirm} =MessageBox
@Service()
export default class inCard implements incard{
    Change(k:number){
        Store.state.isChange=true
        Store.state.bodyType=Store.state.newData.type
        Store.dispatch('open')
        Store.state.newData.title=Store.state.CardArr[k].title
        Store.state.newData.contain=Store.state.CardArr[k].contain
        Store.state.newData.type=Store.state.CardArr[k].type
        Store.state.nowKey=k     
    }
    Delete(k:number){
        confirm('是否删除当前标签?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
          .then(() => {
            Store.state.CardArr.splice(k,1)
            localStorage.setItem('arr',JSON.stringify(Store.state.CardArr))
            Message({
              type: 'success',
              message: '删除成功!'
            })
          })
          .catch(() => {
            Message({
              type: 'info',
              message: '已取消删除'
            })     
          })    
    }
}
