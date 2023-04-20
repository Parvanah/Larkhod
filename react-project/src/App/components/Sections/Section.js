import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const sections=[
  {
    path: "/primary",
    components: Primary,
    routes:[
     {
      path: "/primary/bus",
      components: Bus
     },
     {
      path: "/primary/cart",
      components: Cart
     }
    ]
  },
  {
    path: "/secondary",
    components: Secondary,
    routes:[
      {
       path: "/primary/bus",
       components: Bus
      },
      {
       path: "/primary/cart",
       components: Cart
      }
     ]
  },
  {
    path: "/high",
    components: High,
    routes:[
      {
       path: "/primary/bus",
       components: Bus
      },
      {
       path: "/primary/cart",
       components: Cart
      }
     ]
  },
  
 
];



const Section = () => {
  return (
     <div>
     </div>
            
  )
}

// export default Section
export default function ReactConfigExample(){
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/primary">بخش ابتدائیه</Link>
          </li>
          <li>
            <Link to="/secondary">بخش متوسطه</Link>
          </li>
          <li>
            <Link to="/high">بخش لیسه</Link>
          </li>
        </ul>

        <Switch>
          {sections.map((route ,i)=>(
          <RouteWithSubRoutes key={i} {...route}/>
          ))
          }
        </Switch>
      </div>
    </Router>
  );
}

function RouteWithSubRoutes(route){
  return(
    <Route 
    path={route.path}
    render={props => (
      <route.components {...props} routes={route.routes}/>
    )}
    />
  );
}

function Secondary({ routes }){
  return (
    <div>
      <h2>secondary</h2>
      <ul>
        <li>
          <Link to="/secondary/seventh">صنف هفتم</Link>
        </li>
        <li>
          <Link to="/secondary/eighth">صنف هشتم</Link>
        </li>
        <li>
          <Link to="/secondary/ninth">صنف نهم</Link>
        </li>
      </ul>
      
     <Switch>
      {routes.map((route,i)=>(
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
     </Switch>
      </div>
  );
}
function High({ routes }){
  return (
    <div>
      <h2>high</h2>
      <ul>
        <li>
          <Link to="/high/tenth">صنف هفتم</Link>
        </li>
        <li>
          <Link to="/high/eleventh">صنف هشتم</Link>
        </li>
        <li>
          <Link to="/high/twelve">صنف نهم</Link>
        </li>
      </ul>
      
     <Switch>
      {routes.map((route,i)=>(
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
     </Switch>
      </div>
  );
}

function Primary({ routes }){
  return (
    <div>
      <h2>Primary</h2>
      <ul>
        <li>
          <Link to="/primary/first">صنف اول</Link>
        </li>
        <li>
          <Link to="/primary/second">صنف دوم</Link>
        </li>
        <li>
          <Link to="/primary/third">صنف سوم</Link>
        </li>
        <li>
          <Link to="/primary/fourth">صنف چهارم</Link>
        </li>
        <li>
          <Link to="/primary/fifth">صنف پنجم</Link>
        </li>
        <li>
          <Link to="/primary/sixth">صنف ششم</Link>
        </li>
      </ul>
      
     <Switch>
      {routes.map((route,i)=>(
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
     </Switch>
      </div>
  );
}

function Bus(){
  return <h3>Bus</h3>;
}
function Cart(){
  return <h3>Cart</h3>;
}




