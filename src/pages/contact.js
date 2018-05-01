import React from "react"

export default () =>
  <section>
    <form name="contact" data-netlify data-netlify-honeypot="bot-field" method="POST" action="/sent/">
      <label for="name">Name</label>
      <label>Your Name: <input type="text" name="name" /></label>
      <label>Your Email: <input type="email" name="email" /></label>
      <label>Message: <textarea name="message"></textarea></label>
      <input name="metal" className="bot-field" />
      <button type="submit">Send</button>
    </form>
  </section>
