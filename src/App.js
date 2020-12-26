import React from 'react'

// import ProductCard from './components/ProductCard'
// import products from './product';

// import Navbar from './Navbar'
// import MainContent from './MainContent'
// import Footer from './Footer'



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loading:false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({
      loading:true
    })
    fetch("https://swapi.dev/api/people/20")
      .then(response => response.json())
      .then(data => {
       
        this.setState({
          character: data,
          loading:false
         
        })
      })
  }



  render() {


    const text=this.state.loading?"Loading..": this.state.character.name

    return (
      <div>
        <p>{text}</p>
      </div>

    )

  }
}

export default App

