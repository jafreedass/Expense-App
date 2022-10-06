// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
// import welcome from "../pages/welcome";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import Car from "./pages/Car";

 function Router() {
  return (
    <div>
    <h1 style={{textAlign:"center"}}>welcome from router</h1>

{/* <Layout path="/Layout" element={Layout}></Layout>
<Lay */}
<Layout></Layout>


    


  

    {/* <BrowserRouter> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route path="/Layout" element={<Layout></Layout>}></Route> */}

        <Route path="/Car" element={<Car></Car>} />
          <Route path="/Welcome" element={<Welcome></Welcome>} />
          <Route path="/Product" element={<Product></Product>} />
          
        {/* </Route> */}
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default Router;