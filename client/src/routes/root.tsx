import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/detalles">Detalles</a>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  )
}