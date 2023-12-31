import React from 'react'

const Contact = () => {
  return (
    <section
        id="contact"
        className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
            04. Want to connect?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold sm:text-center">
            Feel Free to Reach Out!
        </h2>
        <p className="max-w-[600px] text-center text-textDark">
            Got a project in mind or just want to connect? Don't hesitate to reach out to me! 
            I'm always excited to explore new opportunities and engage in meaningful discussions. Let's bring ideas to life. 
        </p>
        <a href="mailto:olathedev@gmail.com">
            <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                Contact Me
            </button>
        </a>
    </section>
  )
}

export default Contact