import React from 'react'
import './Page.css'

const Page = () => {
  return (
    <>
        <div className = "page-container d-flex flex-column justify-content-center">
            <div className = "text-center intro mt-5">
                <h1 style={{color: "black"}}>List of SpaceX Launchpads facilities</h1>
                <p>Published on August 27, 2022 by Adarsh</p>
            </div>
            {/* Insert Table Content */}

            {/* Introduction */}
            <div className='intro'>
                <p>Space seems to be even more on our brains than usual lately. Whether you are devouring Andy Weir’s newest release, checking out recent (and amazing) footage from NASA’s Perseverance rover, or following along in the “billionaire space race,” the universe seems to be trending in our thoughts a little more than usual.</p>
                <p>It’s impossible to think about traveling to space without thinking about rockets. And even the most novice of space connoisseurs know that it’s impossible to launch a rocket without a launch pad. It keeps the entire vessel stable during ignition so that the engines can build up to maximum thrust for a smooth – and safe – take off. </p>
            </div>

            <div className = "intro">
                <h2 style={{color: "black"}}>What is a Launchpad</h2>
                <p>Obviously, you didn’t come to this blog to talk about space or rockets. So let’s get right into what a launch pad is in growth-driven design, and why it’s a really great methodology to build a website that is going to bring you long-term success.</p>
                <p>A launch pad serves as the foundation from which the rest of your website is built. Essentially, it’s a high-powered home page (sometimes with one or two other pages).</p>
            </div>
        </div>
    </>
  )
}

export default Page