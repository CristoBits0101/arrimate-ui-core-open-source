'use client'



export default function Sidebar() {
  return (
    <aside className={`${styles.sidebar} left-sidebar`}>
      <nav>
        <ul>
          <Home />
          <Events />
          <Products />
          <Shorts />
          <Videos />
          <Live />
          <Reviews />
          <Community />
        </ul>
      </nav>
    </aside>
  )
}
