import React from 'react';
import myBooks from "./myBooks";
import ListItem from "./components/ListItem";
import BookForm from "./components/BookForm";
import AddModal from "./components/AddModal";
import RemoveModal from "./components/RemoveModal";
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: myBooks,
            myBook: {
                bookName:'',
                year: '',
                page: '',
                author:''
            },
            isAddModalOpen: false,
            isRemoveModalOpen: false,
        }
    }

    handleInput = (e) => {
        this.setState({
            myBook: {
                ...this.state.myBook,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleAddBook = () =>{
        this.setState({
            books:[...this.state.books, this.state.myBook],
            myBook: {
                bookName: '',
                year: '',
                page: '',
                author: ''
            }
        })

        this.handleAddModal();
    }

    handleRemoveBook = (book) => {
      this.setState({
        books: this.state.books.filter(item => {
          return item !== book
        })
      })
      this.handleRemoveModal();
    }


    handleAddModal = () => {
      this.setState( {
        isAddModalOpen: !this.state.isAddModalOpen
      })
    }

    handleRemoveModal = () => {
      this.setState( {
        isRemoveModalOpen: !this.state.isRemoveModalOpen
      })
    }

    render(){
        return(
        <div>
            <div className='container-flex'>
                <div className='flex-item'>
                    {this.state.books.map(item => <ListItem book ={item} handleRemoveBook={this.handleRemoveBook} handleRemoveModal={this.handleRemoveModal} />)}
                </div>

                <BookForm handleAddModal={this.handleAddModal} handleAddBook={this.handleAddBook} handleInput={this.handleInput} myBook={this.state.myBook}/>
            </div>
            {this.state.isAddModalOpen ? <AddModal handleAddBook={this.handleAddBook} handleAddModal={this.handleAddModal} /> : null}

            {this.state.isRemoveModalOpen ? <RemoveModal handleRemoveBook={this.handleRemoveBook} handleRemoveModal={this.handleRemoveModal} /> : null}

        </div>
        )
    };
};

export default App;
