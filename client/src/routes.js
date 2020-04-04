import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Clients from './pages/Clients.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/clients', component: Clients },
];

export default routes;