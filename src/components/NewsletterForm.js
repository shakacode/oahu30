import React from "react"
import axios from "axios"

import css from "./NewsletterForm.module.css"

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      isValidName: false,
      isValidEmail: false,
      isSent: false,
    }
  }

  isValidEmail = email => !!email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

  handleSubmit = () => {
    if (this.isValidEmail(this.state.email) && !!this.state.name) {
      axios.post(
        `https://api.mailerlite.com/api/v1/subscribers/${process.env.GATSBY_MAILERLITE_GROUP_ID}`,
        {
          apiKey: process.env.GATSBY_MAILERLITE_KEY,
          id: process.env.GATSBY_MAILERLITE_GROUP_ID,
          name: this.state.name,
          email: this.state.email,
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      ).then(response => {
        if (response.data && response.data.email) {
          this.setState({ isSent: true })
        }
      }).catch(error => {
        console.log('Error', error);
      })
    }
  }

  handleEmailChange = (e) =>
    this.setState({ email: e.target.value, isValidEmail: this.isValidEmail(e.target.value) })

  handleNameChange = (e) =>
    this.setState({ name: e.target.value, isValidName: !!e.target.value })

  render() {
    const { email, name, isSent, isValidEmail, isValidName } = this.state

    return (
      <div className={css.formBlock}>
        {isSent ? (
          <>
            <h4 className={css.blockTitle}>Thank you!</h4>
            <p>Check your email for further instructions.</p>
          </>
        ) : (
            <>
              <h4 className={css.blockTitle}>Subscribe to get the latest news</h4>
              <input
                type="text"
                className={!isValidName && !!name && css.notValidInput}
                onChange={this.handleNameChange}
                value={name}
                placeholder="Name"
              />
              <input
                type="text"
                className={!isValidEmail && !!email && css.notValidInput}
                onChange={this.handleEmailChange}
                value={email}
                placeholder="Email"
              />
              <button onClick={this.handleSubmit} disabled={!isValidEmail || !isValidName}>
                Submit
              </button>
            </>
          )}
      </div>
    )
  }
}

export default NewsletterForm
