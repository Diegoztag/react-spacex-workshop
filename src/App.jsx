import { useState, useEffect } from 'react'
import { Heading, Image } from '@chakra-ui/react'
import { LaunchItem } from './components/LaunchItem'; 
import * as API from './services/launches';
import logo from './assets/logo.png'


export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, []);

  return (
    <>
      <Image
        m={4}
        src={logo}
        width={300}
        alt="logo" 
      />
      <Heading 
        as="h1" 
        size="lg"
        m={4}
        align="center"
      >
        SpaceX Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <LaunchItem key={launch.flightnumber} {...launch}/>
        ))}
      </section>
    </>
  )
}

export default App
