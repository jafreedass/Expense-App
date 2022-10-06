import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    
      <div>
        
          {/* <li>
            <Link to="/welcome">welcome</Link>
          </li>
          <li>
            <Link to="/product">product</Link>
          </li> */}
         
         
          <NavLink 
            to='/Welcome'
            style={{ textDecoration: 'none',float:"right",fontSize:"30px" }}
    		activeClassName="active">
            Welcome 
          </NavLink>
        
        
          <NavLink
            to='/Product'
            className='nav-link'
            style={{ textDecoration: 'none',float:"right",marginRight:"10px",fontSize:"30px" }}
activeClassName='active'>
            Product
          </NavLink>


          
          <NavLink
            to='/Car'
            className='nav-link'
            style={{ textDecoration: 'none',float:"right",marginRight:"10px",fontSize:"30px" }}
activeClassName='active'>
            Car 
          </NavLink>
          
        

        







    </div>  
  
  )
};

export default Layout;