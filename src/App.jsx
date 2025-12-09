import React from 'react'
import Card from './components/Card'

const App = () => {  

  const jobs = [
  {
    company: "Amazon",
    type1: "Part-Time",
    type2: "Senior Level",
    role: "Senior UI/UX Designer",
    sal: "$120/hr",
    location: "Mumbai, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
  },
  {
    company: "Google",
    type1: "Part-Time",
    type2: "Flexible Schedule",
    role: "Graphics Designer",
    sal: "$150-220k",
    location: "Kochi, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
  },
  {
    company: "Tinder",
    type1: "Contract",
    type2: "Remote",
    role: "Senior Motion Designer",
    sal: "$85/hr",
    location: "Chennai, India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhSFRke66I74W5uGhUSKl646CU0L8TdTLYLhoOCV6CODAlx_2AOuv8jJT0sNQvDE3VOw&usqp=CAU"
  },
  {
    company: "Figma",
    type1: "Full-Time",
    type2: "In office",
    role: "UX Designer",
    sal: "200-250k",
    location: "Bangalore, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    company: "Airbnb",
    type1: "Contract",
    type2: "Remote",
    role: "Junior UI/UX Designer",
    sal: "$100/hr",
    location: "Delhi, India",
    logo: "https://images.icon-icons.com/2699/PNG/512/airbnb_logo_icon_170605.png"
  },
  {
    company: "Apple",
    type1: "Full-Time",
    type2: "Flexible Schedule",
    role: "Graphics Designer",
    sal: "$85-120k",
    location: "Kolkata, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  }
]

  return (
    <>
      <div className="parent flex flex-wrap justify-around gap-22">
        {jobs.map(function(elem){
          return <Card company={elem.company} type1={elem.type1} type2={elem.type2} role={elem.role} salary={elem.sal} loc={elem.location} logo={elem.logo}/>
        })}
      </div>

    </>
  )
}

export default App