import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () =>
  <Layout>
    <section>
      <p>
        Hey there <span role="img" aria-label="hand wave emoji">👋🏻</span> - I design and develop product at <a href="https://fluxfederation.com" target="_blank" rel="noopener noreferrer">Flux Federation</a>.
        My work involves many tools, including <a href="https://github.com/bluefantail" target="_blank" rel="noopener noreferrer">code</a>.
        I enjoy being the glue that helps teams translate design into great user experience.
        I’m also a <Link to="/photography" exact>photographer</Link>.
        Right now I’m captivated by the process of creating really big landscapes, but more generaly I love capturing mood, and telling a story.
        I have a background in performance design, which taught me audience is always the most important thing.
        When I find time, I enjoy <a href="https://medium.com/@mattfannin" target="_blank" rel="noopener noreferrer">writing</a>, <a href="https://medium.com/@mattfannin/strange-things-you-can-do-with-software-on-the-weekend-part-2-32f0d6aa9ff1" target="_blank" rel="noopener noreferrer">drawing</a>, and trying to make games.
      </p>
      <p>
        Want to know more? <Link to="/contact" exact>Lets grab coffee</Link>.
      </p>
    </section>
  </Layout>
