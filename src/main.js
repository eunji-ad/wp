import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');

// createApp(App).use(router).mount('#app')
// createApp(App).use(vuetify).mount('#app')
// 전체 반복해서 작성 시 오류남.. > createApp을 2번 호출해서
// -> createApp은 하나만 생성가능, 
// vue 애플리케이션 인스턴스가 2개가 되어 오류가 생기거나, 2번째 코드를 호출하며 1번째가 적용안됨.(둘 중 하나만 적용됨)
