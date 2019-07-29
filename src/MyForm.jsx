import React from 'react'

class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.nameRef = React.createRef()
    this.emailRef = React.createRef()
    this.cvRef = React.createRef()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()
    console.debug('name given', this.nameRef.current.value)
    console.debug('email given', this.emailRef.current.value)
    console.debug('file selected', this.cvRef.current.files[0].name)
  }

  render() {
    return (
      <form
      onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="Please, type your name" name="name" ref={this.nameRef} defaultValue="Peter"/>
        <input type="email" placeholder="Please, type your email" name="email" ref={this.emailRef} defaultValue="peter@mailinator.com"/>
        <input type="file" ref={this.cvRef}/> Upload your CV
        <button type="submit">Click to Save</button>
      </form>
    )
  }
}

export default MyForm