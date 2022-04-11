import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
enum Type {'学习','生活'}
export interface State {
  /**
  * 用于控制对话框是否显示
  */
  dialogFormVisible:boolean
  /**
  * 保存修改或者添加的标签属性
  */
  newData:{
    title:string
    time:string
    type:string
    contain:string
    key:number
  }
  /**
  * 保存全部标签信息
  */
  CardArr:[{title:string,
  time:string, 
  type: string, 
  contain:string,
  key:number
  }]
  /**
  * 指示当前操作是否为修改
  */
  isChange:boolean,
  /**
  * 指示当前对话框对应的标签号
  */
  nowKey:number,
  /**
  * 用于保护主页面的类型不被意外修改
  */
  bodyType:string
}

const actions={
  /**
  * 打开对话框
  */
  open(done:any){
    done.commit('OPEN')
  },
  /**
  * 关闭对话框
  */
  close(done:any){
    done.commit('CLOSE')
  },
  /**
  * 将newData添加到数组中
  */
  add(done:any,value:State['newData']){
    done.commit('ADD',value)

  }
}

const mutations={
  OPEN(state:State){
    state.dialogFormVisible=true
  },
  CLOSE(state:State){
    state.dialogFormVisible=false
  },
  ADD(state:State,value:State['newData']){
    state.CardArr.push(value)
  }
}

const state:State={
  dialogFormVisible:false,
   newData:{
    title: '',
    time: '', 
    type: Type[0], 
    contain: '',
    key:-1 
  },
  CardArr:[{title: 'title',
  time: 'time', 
  type: Type[0], 
  contain: 'contain',
  key:0 
  }],
  isChange:false,
  nowKey:-1,
  bodyType:'学习'
}

 export default new Vuex.Store<State>({
  actions,
  mutations,
  state
})
