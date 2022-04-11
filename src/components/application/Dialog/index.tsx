import { Vue, Component} from "vue-property-decorator";
import Store from "@/components/core/Store";
import inDialog from "./server";
export interface indialog{
     /**
     * 取消按钮的回调
     */
    Cancel():void
    /**
     * 确定按钮的回调
     */
    Define():void   
    /**
     * 修改类型按钮的回调
     */
    handleCommand(c:string):void
}
@Component
export default class Dialog extends Vue{
    private server:inDialog=new inDialog()
    
    render(){
        return(
            <el-dialog title="编辑" visible={Store.state.dialogFormVisible} show-close={false}> 
                 <el-form >
                   <el-form-item label="标题" label-width="120px">
                     <el-input v-model={Store.state.newData.title} autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="内容" label-width="120px">
                     <el-input v-model={Store.state.newData.contain} autocomplete="off" type="textarea" rows={5}></el-input>
                  </el-form-item>
                 </el-form>
                 <div slot="footer" class="dialog-footer">
                 <el-dropdown trigger="click" v-on:command={this.server.handleCommand}>
                     <span class="el-dropdown-link">
                        {Store.state.newData.type}<i class="el-icon-arrow-down el-icon--right"></i>
                     </span>
                      <el-dropdown-menu slot="dropdown" >
                       <el-dropdown-item icon="el-icon-plus" command='学习'>学习</el-dropdown-item>
                       <el-dropdown-item icon="el-icon-circle-plus" command='生活'>生活</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  <el-button onClick={this.server.Cancel}>取 消</el-button>
                  <el-button type="primary" onClick={this.server.Define}>确 定</el-button>
                </div>
            </el-dialog>
        )
    }
}
