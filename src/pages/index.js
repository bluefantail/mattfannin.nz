import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () =>
  <Layout>
    <section>
      <p>
        Hi there! <span role="img" aria-label="hand wave emoji">👋🏻</span>
      </p>
      <p>
        I design product and build front end at <a href="https://delivereasy.co.nz" target="_blank" rel="noopener noreferrer">Delivereasy</a>.
        My work involves many tools, including <a href="https://github.com/bluefantail" target="_blank" rel="noopener noreferrer">code</a>.
        I enjoy being the glue that helps teams translate design into great user experience.
        As a <Link to="/photography" exact>photographer</Link> I like producing large landscapes, capturing mood and telling a story.
        When there's time, I enjoy <a href="https://medium.com/@mattfannin" target="_blank" rel="noopener noreferrer">writing</a>, <a href="https://medium.com/@mattfannin/strange-things-you-can-do-with-software-on-the-weekend-part-2-32f0d6aa9ff1" target="_blank" rel="noopener noreferrer">drawing</a>, and making games.
      </p>
      <p>
        Want to know more? <Link to="/contact" exact>Let's grab coffee</Link>.
      </p>
    </section>
  </Layout>
