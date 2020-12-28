import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";
import MainMenu from './menu/MainMenu';
import Main from './main/Main';
import Content from './content/Content';
import Screen from './screen/Screen';
import Header from './blocks/Header'
import Footer from './blocks/Footer'

export default function App() {
    const menuItems = [
        { id: 1, checked: true, title: 'Главная', url: '/' },
        { id: 2, checked: false, title: 'Добавить URL', url: '/content' },
        { id: 3, checked: false, title: 'Добавить экран', url: '/screen' },
    ];
    // let [screenItemArr, setScreenItemArr] = useState([
    //     { id: 0, title: 'Экран 1', url: '/screen_1', comment: ''},
    //     { id: 1, title: 'Экран 2', url: '/screen_2', comment: ''},
    //     { id: 2, title: 'Экран 3', url: '/screen_3', comment: ''}
    // ]);
    const [screenItemArr, setScreenItemArr] = useState([]);

    useEffect(() => {
        fetch('/api/screen')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setScreenItemArr(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, []);

    // let [contentItemArr, setContentItemArr] = useState([
    //     { id: 0, title: 'Контент 1', url: '/content1'},
    //     { id: 1, title: 'Контент 2', url: '/content2'},
    //     { id: 2, title: 'Контент 3', url: '/content3'}
    // ]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [contentItemArr, setContentItemArr] = useState([]);

    useEffect(() => {
        fetch('/api/content')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setContentItemArr(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, []);

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />

            <Router>
                <div className='container'>
                    <MainMenu menuItems = {menuItems} />

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
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>

            <Footer />
        </div> 

    );
  }