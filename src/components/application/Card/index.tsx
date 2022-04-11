import { Vue, Component } from "vue-property-decorator";
import { State } from "@/components/core/Store";
import Store from "@/components/core/Store";
import inCard from "./server";

export interface incard{
  /**
  * 修改按钮的回调
  */
  Change(k:number):void
  /**
  * 删除按钮的回调
  */
  Delete(k:number):void
}

@Component
export default class Card extends Vue {
  private server:inCard = new inCard()
 render() { 
    return (
      <el-row gutter={20} >
        {Store.state.CardArr.map((v:State['newData'],i:number)=>{
        return (<el-col id={i} span={6}>
          <el-card class="box-card" style='background-color:#ddd'>{(()=>{v.key=i})()}
            <div slot="header" style='height:23px'>
              <span >{v.title}</span>              
              <el-button style={{'float':'right','margin-top':'-9px','margin-right':'-10px'}} onClick={()=>{
                  this.server.Change(v.key)
               }}>修改</el-button>
               <el-button style={{'float':'right','margin-top':'-9px','margin-right':'4px'}} onClick={()=>{
                  this.server.Delete(v.key)              
               }}>删除</el-button>
              <span style='float:right'>{v.type}</span>  
            </div>
            <div  class="text item" style="min-height:120px ">
              <div style={{'font-size':'10px','position':'relative','top':'-10px'}}>
                最后修改时间：{v.time}
              </div>
              <span style={{'display':'inline-block','width':'100%','word-wrap':'break-word','white-space':'normal','position':'relative','top':'-10px'}}>
                {v.contain}
              </span> 
           </div>
          </el-card>
        </el-col>)
      })
      }
      </el-row>
    ) }
}