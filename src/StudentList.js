import React from 'react';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/students")
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
        <h2>Student Name List</h2>
        <div className="student_table">

          <div className="row">
            <div className="coloumn">
              <b>First Name
              </b>
            </div>
            <div className="coloumn">
              <b>Last Name
              </b>
            </div>
          </div>
          {items.map(item => (
            <div className="row">
              <div className="coloumn">
              {item.firstname} 
            </div>
            <div className="coloumn">
              {item.lastname} 
            </div>
            </div>
          ))}
        </div>
    </div>
    );
  }
}

export default StudentList;