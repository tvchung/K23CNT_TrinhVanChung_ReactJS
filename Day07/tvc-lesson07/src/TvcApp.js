import React, { Component } from 'react';
import TvcRenderCondition from './components/TvcRenderCondition';
import TvcRenderList from './components/TvcRenderList';
import TvcRenderListStudent from './components/TvcRenderListStudent';

class TvcApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
          <h1>Trịnh Văn Chung - Lesson07 - Render condition - Render List Key</h1>
          <TvcRenderCondition />

          <TvcRenderList />

          <TvcRenderListStudent />
      </div>
    );
  }
}

export default TvcApp;