import {useState} from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList)

  // default value is set to null so that you can continually render an element in your JSX code
  const [featPupId, setFeatPupId] = useState(null)
  
  console.log(puppies);
  
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);

  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }

        {/* {featPupId && <p>{featPupId}</p>} */}
        {featPupId && (
          <div className="feature">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}

      </div>
    </>
  )
}

export default App
