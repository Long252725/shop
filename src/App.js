import { publicRoutes } from './router/router';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/home';
import { useEffect } from 'react';


function App() {
    useEffect(()=> {
        function match() {
            let a = document.querySelectorAll('.sp')
            for (let i =0; i<=a.length; i++) {
                
            }
        
        }
        match()
    }, [])
    return (
     
            <div className="App">
                {/* <Home/> */}
                
                <Routes>
                    {publicRoutes.map((route) => {
                        let Page = route.component
                        return (
                            <Route  path={route.path} element={<Page/>}></Route>
                        )
                    })}
                </Routes>
               
            </div>
        
    );
}
export default App;

