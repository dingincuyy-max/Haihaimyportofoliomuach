import React from 'react'
import { brand, hero, navLinks, socials,about,skillGroups,projects,services,testimonials,contact }from './data/portofolio'
import { Navbar,Hero,About,Skills,Projects,Services,Testimonials,Contact,Footer } from './components'
function App() {
  return (
    <div className='h-screen bg-base-100 text-base-content'>
      <main>
      <Navbar brand={brand} links={navLinks}/>
       <Hero {...hero} socials={socials}/>
       <About {...about}/>
       <Skills groups={skillGroups}/>
       <Projects projects={projects}/>
       <Services services={services}/>
       <Testimonials items={testimonials}/>
       <Contact contact={contact}/>
      </main>
      <Footer brand={brand.name} builtWith={"React, Next.js,Tailwindcss"}/>
    </div>
  )
}

export default App