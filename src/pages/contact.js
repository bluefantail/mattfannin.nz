import React from "react"
import Layout from "../components/layout"

export default () =>
  <Layout>
    <section>
      <form name="contact" className="contact" data-netlify data-netlify-honeypot="bot-field" action="/sent" method="POST">
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="message-name">Name</label>
        <input type="text" name="name" id="message-name" placeholder="Your name" />

        <label htmlFor="message-email">Email</label>
        <input type="email" name="email" id="message-email" placeholder="youremail@domain.com" />

        <label htmlFor="message-body">Message</label>
        <textarea name="message" id="message-body" placeholder="Hey Matt ..." ></textarea>

        <input name="bot-field" className="bot-field" />

        <button type="submit">Send message</button>
      </form>
    </section>
  </Layout>
