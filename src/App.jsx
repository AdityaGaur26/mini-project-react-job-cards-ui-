import React from 'react'
import Card from './components/card'

const jobs = [
  {
    id: 1,
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    time: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior-Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },

  {
    id: 2,
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    company: "Google",
    time: "2 days ago",
    role: "Frontend Developer",
    type: "Full-Time",
    level: "Mid-Level",
    salary: "$150/hr",
    location: "Bangalore, India"
  },

  {
    id: 3,
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
    company: "Meta",
    time: "1 week ago",
    role: "React Developer",
    type: "Remote",
    level: "Senior-Level",
    salary: "$180/hr",
    location: "Hyderabad, India"
  },

  {
    id: 4,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDASZrCJ1AbA8chMwxR5R0dLFhCPfT0FgOag&s",
    company: "Microsoft",
    time: "3 days ago",
    role: "UI Engineer",
    type: "Full-Time",
    level: "Junior-Level",
    salary: "$100/hr",
    location: "Pune, India"
  },

  {
    id: 5,
    logo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    company: "Apple",
    time: "6 days ago",
    role: "Product Designer",
    type: "Hybrid",
    level: "Mid-Level",
    salary: "$200/hr",
    location: "Delhi, India"
  },

  {
    id: 6,
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company: "Netflix",
    time: "1 day ago",
    role: "Frontend Architect",
    type: "Remote",
    level: "Senior-Level",
    salary: "$250/hr",
    location: "Chennai, India"
  }
];


const App = () => {
  return (
    <div className='parent'>
      {jobs.map((job,idx) => (
        <div key={idx}>
          <Card logo={job.logo} company={job.company} time={job.time} role={job.role} type={job.type} level={job.level} salary={job.salary} location={job.location} />
        </div>
      ))}
    </div>
  )
}


export default App
