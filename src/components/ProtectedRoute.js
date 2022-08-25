import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (
    { 
    component: Component, 
    header: Header,
    footer: Footer,
    ...props }) => {
  return (
    <Route>
    {() => {
            if (props.loggedIn) {
                return (
                <>
                    <Header headerEmail={props.headerEmail}/> 
                    <Component {...props}/>
                    <Footer/>
                </>)
            } 
             else return <Redirect to="./sign-in" />
        }
    }
    </Route>
)}

export default ProtectedRoute;