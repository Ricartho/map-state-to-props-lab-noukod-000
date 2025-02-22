import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <p>Total Users: {this.props.numberOfUsers}</p>
        <ul>
            {this.props.users.map(user => {
               return (<li>{user.username}</li>)
            })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users,
          numberOfUsers: state.users.length
        };
}

export default connect(mapStateToProps)(Users)
