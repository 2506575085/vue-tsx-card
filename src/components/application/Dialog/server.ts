import { indialog } from ".";
import {Service} from "vue-server-typedi"
import Store from "@/components/core/Store";
import Utils from "@/components/core/utils";
@Service()
export default class inDialog implements indialog{
    Cancel(){
        Store.state.newData.contain=''
        Store.state.newData.title=''
        Store.dispatch('close')
        Store.state.newData.type=Store.state.bodyType
    }
    Define(){
        if(!Store.state.isChange){
            if(Store.state.newData.title==''&&Store.state.newData.contain==''){
                  Store.dispatch('close')
                  Store.state.isChange=false
                  Store.state.newData.type=Store.state.bodyType
            }
            else{
                  
                Store.dispatch('add',{
                title:Store.state.newData.title,
                contain:Store.state.newData.contain,    
                time: Utils.getDate('yyyy-MM-dd HH:mm'),   
                type:Store.state.newData.type}
                )
                Store.dispatch('close')
                Store.state.isChange=false
                Store.state.newData.type=Store.state.bodyType
                Store.state.newData.contain=''
                Store.state.newData.title=''
                localStorage.setItem('arr',JSON.stringify(Store.state.CardArr))
              }
      }
      else{
            Store.state.CardArr[Store.state.nowKey].title=Store.state.newData.title
            Store.state.CardArr[Store.state.nowKey].contain=Store.state.newData.contain
            Store.state.CardArr[Store.state.nowKey].time= Utils.getDate('yyyy-MM-dd HH:mm')
            Store.state.CardArr[Store.state.nowKey].type=Store.state.newData.type
            Store.dispatch('close')
            Store.state.isChange=false
            Store.state.newData.type=Store.state.bodyType
            Store.state.newData.contain=''
            Store.state.newData.title=''
            localStorage.setItem('arr',JSON.stringify(Store.state.CardArr))
        }
    }
    handleCommand(c:string) {
        Store.state.newData.type=c
      }

}