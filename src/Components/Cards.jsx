import React from 'react'

function Cards({object}) {
  return <div className="col-lg-4">
  
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{object.plan}</h5>
            <h6 className="card-price text-center">${object.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={object.isUser?"":"text-muted"}><span className="fa-li" ><i className={object.isUser?"fas fa-check":"fas fa-times"}></i></span>{object.plan!=="FREE"?<b>{object.user}</b>:object.user}</li>
              <li className={object.isStorage?"":"text-muted"}><span className="fa-li"><i className={object.isStorage?"fas fa-check":"fas fa-times"}></i></span>{object.storage}</li>
              <li className={object.ispublicProjects?"":"text-muted"}><span className="fa-li"><i className={object.ispublicProjects?"fas fa-check":"fas fa-times"}></i></span>{object.publicProjects}</li>
              <li className={object.iscommunityAccess?"":"text-muted"}><span className="fa-li"><i className={object.iscommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{object.communityAccess}</li>
              <li className={object.isprivateProjects?"":"text-muted"}><span className="fa-li"><i className={object.isprivateProjects?"fas fa-check":"fas fa-times"}></i></span>{object.privateProjects}</li>
              <li className={object.isphoneSupport?"":"text-muted"}><span className="fa-li"><i className={object.isphoneSupport?"fas fa-check":"fas fa-times"}></i></span>{object.phoneSupport}</li>
              <li className={object.issubDomain?"":"text-muted"}><span className="fa-li"><i className={object.isubDomain?"fas fa-check":"fas fa-times"}></i></span>{object.plan==="PRO"?<><b>Unlimited</b> {object.subDomain}</>:object.subDomain}</li>
              <li className={object.isReports?"":"text-muted"}><span className="fa-li"><i className={object.isreports?"fas fa-check":"fas fa-times"}></i></span>{object.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
}

export default Cards
