import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <h1>My Todo App</h1>
          <li>Go for walk</li>
          <li>Laundry</li>
          <li>Wash dishes</li>
        </ul>

        <form>
          <input />
          <button>Add todo</button>
        </form>

        <button>Clear completed</button>
      </div>
    )
  }
}
