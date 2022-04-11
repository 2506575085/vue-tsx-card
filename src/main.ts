import Vue from 'vue'
import App from './App'
import {Card,Button,Row,Col,Container,Header,Main,Dropdown,DropdownItem,DropdownMenu,Dialog,Form,FormItem,Input} from 'element-ui'
import store from './components/core/Store'
Vue.config.productionTip = false
Vue.component(Button.name,Button)
Vue.component(Card.name,Card)
Vue.component(Row.name,Row)
Vue.component(Col.name,Col)
Vue.component(Container.name,Container)
Vue.component(Header.name,Header)
Vue.component(Main.name,Main)
Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(Dialog.name,Dialog)
Vue.component(Form.name,Form)
Vue.component(FormItem.name,FormItem)
Vue.component(Input.name,Input)

new Vue({
  el:'#app',
  render: h => h(App),
  store,
  
}).$mount('#app')
