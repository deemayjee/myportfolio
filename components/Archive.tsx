import React from 'react'
import ArchiveCard from './ArchiveCard'

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4">
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-titleFont font-semibold">other previous projects</h2>
            <p className="text-sm font-titleFont text-textGreen">click to view archive</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
            <ArchiveCard 
              title="Devlin Real Estate School"
              description="A school for coaching and training real estate agents at every career level - beginners to top agents.
              They also prepare people to pass the California real estate license exam."
              listItem={ ["Php", "Wordpress", "Photoshop"] }
              link="https://dreclass.com/"
            />
             <ArchiveCard 
              title="Cinema-x"
              description="Your ultimate movie companion. An app explore a vast library, browse trailers, and get showtime updates. 
              Personalized recommendations cater to your taste, while easy booking makes watching your ..."
              listItem={ ["JavaScript", "React", "ThemovieDB"] }
              link="https://github.com/deemayjee/Cinema-x"
            />
             <ArchiveCard 
              title="Stefanie Grundl"
              description="A website for a life Coach that offers tailored guidance for self-improvement, career, and relationships. 
              Unlock your full potential through one-on-one sessions, goal-setting tools, and transformative resources."
              listItem={ ["Php", "Wordpress", "Photoshop"] }
              link="https://www.stefaniegruendl.com/en/"
            />
             <ArchiveCard 
              title="Daily To Do App"
              description="Your ultimate task manager. Simplify your life with intuitive to-do lists, deadlines, and reminders. 
              Effortlessly prioritize tasks, collaborate with teams, and track progress."
              listItem={ ["Html", "Css", "JavaScript"] }
              link="https://deemayjee.github.io/todo-app/"
            />
             <ArchiveCard 
              title="Palmfront"
              description="An innovative online event management system that helps event planners and event owners take their events to the next level by adding a digital experience for attendees. "
              listItem={ ["Html", "Css", "Php"] }
              link="https://palmfront.com/"
            />
             <ArchiveCard 
              title="Transformative Tech Academy"
              description="TT Academy is a platform to educate, gather, and activate passionate people committed to building the next generation of transformative technologies that will redefine wellbeing for the next decade."
              listItem={ ["Php", "cms", "Photoshop"] }
              link="https://transformativetech.org/"
            /> 
        </div>
    </div>
  )
}

export default Archive