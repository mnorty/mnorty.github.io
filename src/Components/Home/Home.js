import React, { Component } from 'react'
import '../Home/Home.css'
import Heart from '../../Assets/WhiteHeart.svg'
import Science from '../../Assets/Science.svg'
import Seeking from '../../Assets/Seeking.svg'
import NavBar2 from '../NavBar2/Navbar2'

class Home extends Component {
  render() {
    return(
      <div>
        <div className="Field" id='HomeField'>
          <NavBar2/>
          <div className='FieldContent'>
          <div className="Box" >
            <div className='content'> 
              <div className="BoxStack" id='box1'>
                <img className='Icon'src={Science} alt=""/>               
                <p className='title'>Embrace Scientific thinking</p>              
                <p className='heroBody'>Best practices blue money. Minimize backwards overflow drink from the firehose, for window-licker, so we've bootstrapped the model and this is our north star design helicopter view, and herding cats. We're ahead of the curve on that one my capacity is full, we’re all in this together, even if our businesses function differently so that's not on the roadmap nor player-coach or are there any leftovers in the kitchen?. Bench mark upstream selling. Optimize for search performance review gage "sic" where the industry is heading and give back to the community what we’ve learned punter but prioritize these line items, can you slack it to me?.</p>
              </div>
            </div>
          </div>
          <div className="Box" >
            <div className='content'> 
              <div className="BoxStack" id='box2'>
                <img className='Icon'src={Heart} alt=""/>
                <p className='title'>Creating Value for the Customer</p>
                <p className='heroBody'>When does this sunset? open door policy, or offline this discussion. Talk to the slides come up with something buzzworthy high performance keywords herding cats. Quick win shelfware pulling teeth, yet a set of certitudes based on deductions founded on false premise. On-brand but completeley fresh prioritize these line items single wringable neck but due diligence. Product launch. Rehydrate the team technologically savvy. Both the angel on my left shoulder and the devil on my right are eager to go to the next board meeting and say we’re ditching the business model dogpile that but we don't want to boil the ocean for imagineer, we want to empower the team with the right tools and guidance to uplevel our craft and build better nor can you run this by clearance?</p>
              </div>
             </div>
          </div>
          <div className="Box" >
            <div className='content'> 
              <div className="BoxStack" id='box3'>
                <img className='Icon'src={Seeking} alt=""/>
                <p className='title'>Seeking <br/>Perfection</p>
                <p className='heroBody'>Onward and upward, productize the deliverables and focus on the bottom line. Fire up your browser. Blue sky. Optimize for search let's prioritize the low-hanging fruit sacred cow we can't hear you beef up, for i dont care if you got some copy, why you dont use officeipsumcom or something like that ? we need to socialize the comms with the wider stakeholder community. Streamline can you slack it to me? so prepare yourself to swim with the sharks first-order optimal strategies so quick win in this space. C-suite incentivization run it up the flagpole, ping the boss and circle back. Net net. Who's responsible for the ask for this request? game-plan lean into that problem this vendor is incompetent nor work.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Home