import React from 'react';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/book_borrowed_details")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
        const { error, isLoaded, items } = this.state;

    return (
       <div>
      <h2>Books Borrowed Details</h2>


      <div className="booksDetails_table">

        <div className="row">
          <div className="coloumn">
            <b>Book Name
            </b>
          </div>
          <div className="coloumn">
            <p><b>Book Author
              </b></p>
          </div>
          <div className="coloumn">
            <p><b>Borrowed by (student name)
              </b></p>
          </div>
          <div className="coloumn">
            <p><b>Date of borrow
              </b></p>
          </div>
          <div className="coloumn">
            <p><b>expected date of return
              </b></p>
          </div>
        </div>
       {items.map(item => (
            <div className="row">
              <div className="coloumn">
              {item.bookname} 
              </div>
              <div className="coloumn">
                {item.author} 
              </div>
              <div className="coloumn">
                {item.firstname} 
              </div>
              <div className="coloumn">
                {item.borrowed_date} 
              </div>
              <div className="coloumn">
                {item.returning_date} 
              </div>
            </div>
          ))}
      </div>

    </div>
    );
  }
}

export default BookDetails;