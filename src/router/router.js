import Home from '../pages/Home/home';
import Buy from '../pages/Buy';


const publicRoutes = [
    {path: '/', component: Home},    
    {path: '/buy/0', component: Buy},  
    
 



]

const privateRoutes = []

export { publicRoutes, privateRoutes }