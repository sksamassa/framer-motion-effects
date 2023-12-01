import React from 'react'
import './MyComponent.css'
import { motion, useAnimate } from 'framer-motion'

export default function MyComponent() {
    const [animate, setAnimate] = useAnimate({ opacity: 1 });
  return (
    <motion.div className='component'
    initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 0.4, delay: 0.1,  }}
        onClick={() => setAnimate( { opacity: 0 })}
        whileHover={{ color: "#fff", backgroundColor: "#04AA6D", scale: 1.2, margin: '5em 0', alignSelf: 'center' }}>
        <h1>Ipsum dolor</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.
        </p>
    </motion.div>
  )
}
