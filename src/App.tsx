import { Component, Vue } from 'vue-property-decorator';
import Body from './components/application/Body/index';

@Component
export default class App extends Vue {
  render() {
    return ( 
      <div id="app">
        <Body />
      </div>
    )
  }
}
