import React from 'react';
import { Swtich, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <div>
      <Swtich>
        <Route exact path='/' component={ListPage}/>
        <Route path='/page/:page' component={ListPage}/>
        <Route path='/tag/:tag/:page?' component={ListPage}/>
        <Route path='/post/:id' component={PostPage}/>
        <Route path='/' component={EditorPage}/>
        <Route component={NotFoundPage}/>
      </Swtich>
    </div>
  );
};

export default App;