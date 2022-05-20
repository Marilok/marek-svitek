import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <title>Nenalezeno</title>
      <h1>Stránka nebyla nalezena</h1>
      <p>Bohužel stránku, kterou hledáte neexistuje.
      </p>
        <Link to="/">Zpět</Link>.
    </main>
  )
}

export default NotFoundPage
