import React from 'react'
import Banner from './Banner'
import Card from './Card'
import "./index.css"

function Home() {
  return (
    <div>
        <Banner />

        <div className='home__cards'>
            <Card img="https://images.unsplash.com/photo-1576874748772-584aa2bee2d4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y290dGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100"
                  title="Visit a home away from home"
                  desc="A comfortable home where you can put your feet up to rest in style."
            />
            <Card
                img="https://images.unsplash.com/photo-1520322082799-20c1288346e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN3aW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100"
                title= "Try something new"
                desc= "Get out of your comfort zone"
            />
            <Card
              img="https://images.unsplash.com/photo-1447279506476-3faec8071eee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvb2tpbmclMjBjbGFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100"
              title="Learn a new skill"
              desc="Impress your friends"
            />
        </div>

        <div className='home__cards'>
            <Card
            img="https://images.unsplash.com/photo-1612320743558-020669ff20e8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472"
            title="loremp ipsum"
            desc="A luxe apartment in the heart of NYC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            price="$300 a night"/>
            <Card 
            img="https://images.unsplash.com/photo-1576442850492-dae97d3e0129?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBpbiUyMHRoZSUyMHdvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100"
            title="loremp ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            price="$90 a night"/>
            <Card
            img="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=1100"
            title="loremp ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "  
            price="$400 a night"/>
        </div>
    </div>
  )
}

export default Home