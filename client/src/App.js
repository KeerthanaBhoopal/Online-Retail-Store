import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {NavItem, NavLink, Nav, Breadcrumb, BreadcrumbItem } from 'reactstrap'
//npm install bootstrap
//import 'bootstrap/dist/css/bootstrap.css'

import Home from './components/Home'
import Login from './components/Users/Login'
import Register from './components/Users/Register'


import Stores from './components/Stores'
import Jewellery from './components/Jewellery'
import Costume from './components/Costume'
import Cosmetics from './components/Cosmetic'

function App(props){
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    window.location.href = '/users/login'
    // return (
    //  <Redirect to="/account/login"/>
    // ) < does not work
  }

    return(
  <BrowserRouter>
  <div className="container">
  {/* <h1>Notes - App</h1> */}
    <Breadcrumb>
        <h1><BreadcrumbItem><a href="/">Shringar</a></BreadcrumbItem></h1>
    </Breadcrumb>
  {/* <Link to="/"><Button outline color="info">Notes-App</Button>{' '}</Link> */}
  {
    localStorage.getItem('authToken') ? (
      <div>
        <Nav tabs>
         
          
          <NavItem>
            <NavLink href="/jewellery">Jewellery</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/costume">Costumes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cosmetics">Cosmestics</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stores">Stores</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
          </NavItem>
        </Nav>
       
      </div>
    ) : (
      <div>
        <Nav tabs>
        <NavItem>
            <NavLink href="/jewellery">Jewellery</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/costume">Costumes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cosmetics">Cosmestics</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stores">Stores</NavLink>
          </NavItem>
          
          <NavItem>
              <NavLink href="/users/login">Login</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/users/register">Register</NavLink>
          </NavItem>
        </Nav>
        {/* <Link to="/users/login">Login</Link>
        <Link to="/users/register">Register</Link> */}
      </div>
    )
  }

  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/users/register" component={Register} />
    <Route path="/users/login" component={Login} />

    <Route path="/stores" component={Stores} exact={true}/>
    <Route path="/jewellery" component={Jewellery} exact={true}/>
    <Route path="/costume" component={Costume} exact={true}/>
    <Route path="/cosmetics" component={Cosmetics} exact={true}/>
  </Switch>
  </div>
  </BrowserRouter>
    )}
export default App




