import axios from "axios";
import { inbody } from ".";
import {Service} from "vue-server-typedi"
import Store from "@/components/core/Store";
import { Message,MessageBox } from "element-ui";
const {confirm} =MessageBox
@Service()
export default class inBody implements inbody{   
  async Update(){
     confirm('此操作会彻底覆盖云端数据，无法恢复，是否确定?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    .then(
        async() => {
            await axios({
                method:'PUT',
                url:'http://localhost:30000/posts/1',
                data:{data:Store.state.CardArr}
            })
            .then(()=>{
                 Message({
                     type: 'success',
                     message: '操作成功!'
                 })
            })
            .catch(()=>{
                Message({
                    type:'warning',
                    message:'网络异常，上传失败'
                })
            })
        }
    )
    .catch(() => {
        Message({
            type: 'info',
            message: '已取消'
        })     
      })    
  }
 
  async Download(){
    confirm('此操作会彻底覆盖本地数据，无法恢复，是否确定?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    })
    .then(
        async() => {
            await axios({
                method:'GET',
                url:'http://localhost:30000/posts'
            })
            .then(response=>{
                Store.state.CardArr=response.data[0].data
                localStorage.setItem('arr',JSON.stringify(Store.state.CardArr))
                Message({
                    type: 'success',
                    message: '操作成功!'
                }) 
            })
            .catch(()=>{
                Message({
                    type:'warning',
                    message:'网络异常，下载失败'
                })
            })
        }
    )
    .catch(() => {
        Message({
          type: 'info',
          message: '已取消'
        })     
      })    
    
    
  }
}