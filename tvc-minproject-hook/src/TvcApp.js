import React from 'react'
import TvcThemeToggle from './components/TvcThemeToggle'
import TvcTodoList from './components/TvcTodoList'
import { ThemeProvider } from "./context/TvcThemeContext";

export default function TvcApp() {
  return (
    <div className='container border mt-3'>
      <h1>Mini Project: Quản Lý Công Việc (To-Do List) với Hooks trong ReactJS</h1>
      <p>Dự án này giúp bạn thực hành sử dụng 
        <code>useState, useEffect, useReducer, useRef, và useContext </code>
        để tạo một ứng dụng quản lý công việc (To-Do List) đơn giản.</p>
        <hr/>

        <ThemeProvider>
          <div className="App">
            <h1>Quản Lý Công Việc</h1>
              <TvcThemeToggle />
              <TvcTodoList />
          </div>
        </ThemeProvider>
    </div>
  )
}
