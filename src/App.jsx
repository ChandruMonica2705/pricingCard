import React from 'react'
import Cards from './Components/Cards'

function App() {
  let object=[
    {
    plan:"FREE",
    price:0,
    user:"Single User",
    isUser:true,
    storage:"5 GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    ispublicProjects:true,
    communityAccess:"Community Access",
    iscommunityAccess:true,
    privateProjects:"Unlimited Private Projects",
    isprivateProjects:false,
    phoneSupport:"Dedicated Phone Support",
    isphoneSupport:false,
    subDomain:"Free Subdomain",
    issubDomain:false,
    reports:"Monthly Status Reports",
    isReports:false,
  },
  {
    plan:"PLUS",
    price:9,
    user:"5 Users",
    isUser:true,
    storage:"50 GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    ispublicProjects:true,
    communityAccess:"Community Access",
    iscommunityAccess:true,
    privateProjects:"Unlimited Private Projects",
    isprivateProjects:true,
    phoneSupport:"Dedicated Phone Support",
    isphoneSupport:true,
    subDomain:"Free Subdomain",
    issubDomain:true,
    reports:"Monthly Status Reports",
    isReports:false,
  },
  {
    plan:"PRO",
    price:49,
    user:"Unlimited Users",
    isUser:true,
    storage:"150 GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    ispublicProjects:true,
    communityAccess:"Community Access",
    iscommunityAccess:true,
    privateProjects:"Unlimited Private Projects",
    isprivateProjects:true,
    phoneSupport:"Dedicated Phone Support",
    isphoneSupport:true,
    subDomain:"Free Subdomain",
    issubDomain:true,
    reports:"Monthly Status Reports",
    isReports:true,
  }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
       object.map((ele,i)=>{
        return <Cards object={ele} key={i} />
       })
      }
    </div>
  </div>
</section>
</>
}

export default App
