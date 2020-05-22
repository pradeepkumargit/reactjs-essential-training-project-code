import React from 'react';
import PropTypes from 'prop-types';
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

export class Library extends React.Component {

    static defaultProps = {
      books: [
        {
          "title":"Tahoo Tales",
          "author":"Chet Whitley",
          "pages":1000
        }
      ]
    }
  
    state = { 
      open: true,
      freeBookMark: false,
      hiring: true,
      data: [],
      loading: false
    }
  
    toggleOpenClosed = ()  => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
  
    componentDidMount() {
      this.setState( {loading: true});
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
    }
  
    componentDidUpdate() {
      console.log('Component just update')
    }
  
    render() {
      console.log(this.state);
      const { books }= this.props
      return (
        <div>
          {this.state.hiring ? <Hiring/> : <NotHiring/>}
          {this.state.loading ? 
            'Loading...'
            : <div>
                {this.state.data.map( product => {
                  return (
                    <div key={product.id}>
                      <h2>Third Party API integartion Example </h2>
                      <h3>Library Product of the week</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} height={100}/>
                    </div>
                  )
                })}
              </div>
            }
          <h1>This Library is {this.state.open ? 'open':'closed'}</h1>
          <h3> Dummy Data Integration Exmple</h3>
          <button onClick={this.toggleOpenClosed}>Change</button>
          <span>Using Event/Method Example</span>
          {books.map(
            (book,i) => 
            <Book 
              key={i}
              title={book.title} 
              author={book.author}
              pages={book.pages}
              freeBookMark={this.state.freeBookMark}/>
          )}
        </div>
      )
    }  
  }
  
  // class FavouriteColorForm extends React.Component {
  //   state = { value:''}
  
  //   newColor = e => {
  //     this.setState({ value :e.target.value})
  //   }
  
  //   submit = e => {
  //     console.log(`New Color : ${this.state.value}`);
  //     e.preventDefault();
  //   }
      
  //   render() {
  //     return (
  //       <form onSubmit={this.submit}>
  //         <label>Favourite Color:
  //           <input 
  //             type="color"
  //             onChange={this.newColor}/>
  //         </label>
  //         <button>Submit</button>
  //       </form>
  //     )
  //   }
  // }
  
  Library.propTypes = {
    books: PropTypes.array
  }
  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookMark: PropTypes.bool
  }
  export default Library