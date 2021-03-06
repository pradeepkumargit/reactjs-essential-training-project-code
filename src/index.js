import React from 'react';
import { render} from 'react-dom';
import Library from './Library';
import Clock from './Clock';

let bookList = [
  {"title":"Book 1","author":"Author 1","pages": 260},
  {"title":"Book 2","author":"Author 2","pages": 260},
  {"title":"Book 3","author":"Author 3","pages": 260},
  {"title":"Book 4","author":"Author 4","pages": 260}
]

render(
  <div>
    <Library books={bookList}/>,  
    
    <Clock/>,
  </div>,
  document.getElementById('root')
);