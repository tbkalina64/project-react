import React, { Component } from 'react'
import './projects.scss'

export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    };
  }

  componentDidMount() {
    // const url = 'https://picsum.photos/';/150 https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=8')
      .then(res => res.json())
      .then((result) => { this.setState({ isLoaded: true, items: result }); },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        },
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;

    // const FILTER_MAP = {
    //   All: () => true,
    //   CMS: (task) => !task.js,
    //   JS_Frameworks: (task) => task.js
    // };
    // const FILTER_NAMES = Object.keys(FILTER_MAP);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section id='projects'>
          <h5>Some of my projects</h5>
          <h2>Projects</h2>
          <div className="container projects">
            <ul className='projects__list'>
              {items.map(item => (
                <li className='item' key={item.id}>
                  <span><b>Title is:</b> {item.title}</span>  
                  <img className='item__img' src={item.thumbnailUrl} alt="image" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )
    }
  }
}
