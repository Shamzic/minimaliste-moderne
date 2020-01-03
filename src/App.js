import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import PostsList from './components/postslist'
import AddPost from './components/addpost'
import CategoriesList from './components/categorieslist'
import Info from './components/info'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Content}/>
          <Route path='/postslist' component={PostsList}/>
          <Route path='/addpost' component={AddPost}/>
          <Route path='/categorieslist' component={CategoriesList}/>
          <Route path='/info' component={Info}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
