import { Vue, Component} from "vue-property-decorator";
import Card from "../Card";
import Store from "@/components/core/Store";
import Dialog from "../Dialog";
import inBody from "./server";
export interface inbody{
  /**
  * 上传本地数据
  */
  Update():void
  /**
  * 下载数据到本地
  */
  Download():void
}
@Component
export default class Body extends Vue { 
  created(){
    //读取本地数据
    if(localStorage.getItem('arr')==null){
      localStorage.setItem('arr',JSON.stringify(Store.state.CardArr))
      Store.state.CardArr=JSON.parse(localStorage.getItem('arr')!)
    }
    else{
      Store.state.CardArr=JSON.parse(localStorage.getItem('arr')!)
    }
  }
  handleCommand(command:string) {
    Store.state.newData.type=command
    Store.state.bodyType=command
  }
  private server:inbody=new inBody()
  render() {   
    return (
      <div>
      <el-button style='float:right' onClick={this.server.Update}>update</el-button>
      <el-button style='float:right' onClick={this.server.Download}>download</el-button>
      <Dialog/>
      <el-container>
          <el-header>           
                <el-row class="block-col-2" >
                 <el-col span={12} >
                    <el-dropdown trigger="click" v-on:command={this.handleCommand}>
                     <span class="el-dropdown-link">
                        {Store.state.bodyType}<i class="el-icon-arrow-down el-icon--right"></i>
                     </span>
                      <el-dropdown-menu slot="dropdown" >
                       <el-dropdown-item icon="el-icon-plus" command='学习'>学习</el-dropdown-item>
                       <el-dropdown-item icon="el-icon-circle-plus" command='生活'>生活</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                 </el-col>
                </el-row>
                <el-button type="button" style={{'position':'relative','left':'70px','top':'-28px'}} onClick={()=>{
                  Store.state.isChange=false
                  Store.dispatch('open')}}>新建</el-button>
          </el-header>
          <el-main>           
              <Card/>        
          </el-main>
      </el-container>
    </div>)
  }
}


