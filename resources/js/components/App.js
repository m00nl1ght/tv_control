import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";

//components
import MainMenu from './menu/MainMenu';
import Main from './main/Main';
import Content from './content/Content';
import Screen from './screen/Screen';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export default function App() {
    const [screenItemArr, setScreenItemArr] = useState([]);

    useEffect(() => {
        fetch('/api/screen')
          .then(res => res.json())
          .then(
            (result) => {
              setScreenItemArr(result);
            },
            (error) => {
              // setIsLoaded(true);
              // setError(error);
            }
          )
    }, []);

    // const [error, setError] = useState(null);
    const [isLoadedContent, setIsLoadedContent] = useState(false);
    const [contentItemArr, setContentItemArr] = useState([]);

    useEffect(() => {
        fetch('/api/content')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoadedContent(true);
              setContentItemArr(result);
            },
            (error) => {
              // setIsLoaded(true);
              // setError(error);
            }
          )
    }, []);

    return (
      <div className='d-flex flex-column min-vh-100'>
        <Header />

        <Router>
            <div className='container'>
                {/* <MainMenu menuItems = {menuItems} /> */}
                <MainMenu />
                <Switch>
                    <Route path="/content">
                        <Content 
                            contentItemArr = {contentItemArr}
                            setContentItemArr = {setContentItemArr}
                        />
                    </Route>

                    <Route path="/screen">
                        <Screen 
                            screenItemArr = {screenItemArr}
                            setScreenItemArr = {setScreenItemArr}
                        />
                    </Route>

                    <Route path="/">
                        <Main  
                            contentItemArr = {contentItemArr}
                            screenItemArr = {screenItemArr}
                            isLoaded = {isLoadedContent}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>

        <Footer />
      </div> 
    );
  }