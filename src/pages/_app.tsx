// src/pages/_app.tsx
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section>
      <header>React Test Place</header>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
