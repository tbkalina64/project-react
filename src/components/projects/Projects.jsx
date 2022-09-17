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
            isLoaded: false,
            error
          });
        },
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section id='projects'>
          <h2>Projects</h2>
          <div className="container projects">
            <ul className='projects__list'>
              {items.map(item => (
                <li className='projects__item' key={item.id}>
                  {item.title}
                  <img className='projects__img' width={100} src={item.thumbnailUrl} alt="image" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )
    }
  }
}
