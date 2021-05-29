import React from 'react';
import './Posts.css';
import Business from "../../Assests/Business.png";
import Nature from "../../Assests/Nature.png";
import Roads from "../../Assests/Roads.png";
import Work from "../../Assests/Work.png";
import Mountaining from "../../Assests/Mountaining.png";
import Meditation from "../../Assests/Meditation.png";
import Relaxation from "../../Assests/Relaxation.png";
import Family from "../../Assests/Family.png";
const Posts = () => {

    return (
        <posts>
        <h1 className="font-bold text-title" >Blog Posts</h1>    
        <div className="posts__cards">
          <div className="card">
           <div className="card_inner">
           <img src={Business} alt="Business" />
           <span className="card_category">Business</span>
              <h1>Conduct at an replied removal an amongst</h1>
              <p className="text-primary-p">However venture pursuit he am mr cordial. 
              Forming musical am hearing studied be luckily. But in for determine what would see...</p>
              <br/>
              <p className="font-bold text-title">28 Jan 2018</p>
            </div>
          </div>

          <div className="card">
           <div className="card_inner">
           <img src={Nature} alt="Nature"/>
           <span className="card_category">Nature</span>
             <h1>Off tears are day blind smile alone had ready</h1>
              <p className="text-primary-p">Is at purse tried jokes china ready decay an. 
              Small its shy way had woody downs power. To denoting admitted speaking learning my...</p>
              <br/>
              <p className="font-bold text-title">25 Feb 2019</p>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
            <img src={Roads} alt="Roads"/>
            <span className="card_category">Life</span>
            <h1>Difficult in delivered extensive at direction</h1>
              <p className="text-primary-p">Is at purse tried jokes china ready decay an. 
              Small its shy way had woody downs power. To denoting admitted speaking learning my...</p>
              <br/>
              <p className="font-bold text-title">15 Mar 2019</p>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
            <img src={Work} alt="Work"/>
            <span className="card_category">Technology</span>
            <h1>It so numerous if he may outlived disposal</h1>
              <p className="text-primary-p">How but sons mrs lady when. 
              Her especially are unpleasant out alteration continuing unreserved ready road market resolution...</p>
             <br/>
              <p className="font-bold text-title">18 Jul 2019</p>
            </div>
          </div>

          <div className="card">
           <div className="card_inner">
           <img src={Mountaining} alt="Mountaining"/>
           <span className="card_category">Mountaining</span>
             <h1>Extremity so attending objection as engrossed</h1>
              <p className="text-primary-p">Pursuit chamber as elderly amongst on.
              Distant however warrant farther to of. My justice wishing prudent waiting in be...</p>
              <br/>
              <p className="font-bold text-title">31 Jul 2019</p>
            </div>
          </div>

          <div className="card">
           <div className="card_inner">
           <img src={Meditation} alt="Meditation"/>
           <span className="card_category">Meditation</span>
             <h1>Bed sincerity yet therefore forfeited his</h1>
              <p className="text-primary-p">Speaking throwing breeding betrayed children my to. 
              Me marianne no he horrible produced ye. Sufficient unpleasing and...</p>
              <br/>
              <p className="font-bold text-title">15 Aug 2020</p>
            </div>
          </div>

          <div className="card">
           <div className="card_inner">
           <img src={Relaxation} alt="Relaxation"/>
           <span className="card_category">Relaxation</span>
             <h1>Object remark lively all did feebly excuse our</h1>
              <p className="text-primary-p">Morning prudent removal an letters by. On could my in order never it. 
              Or excited certain sixteen it to parties colonel not seeing...</p>
              <br/>
              <p className="font-bold text-title">23 Sep 2019</p>
            </div>
          </div>

          <div className="card">
           <div className="card_inner">
           <img src={Family} alt="Family"/>
           <span className="card_category">Family</span>
             <h1>His followed carriage proposal entrance</h1>
              <p className="text-primary-p">For county now sister engage had season better had waited. 
              Occasional mrs interested far expression directly as regard...</p>
              <br/>
              <p className="font-bold text-title">02 Feb 2020</p>
            </div>
          </div>
        </div>
        </posts>
    );

}

export default Posts;

    