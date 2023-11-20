import {} from "react";
import "./App.css";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import PersonalSkills from "./components/PersonalSkills";
function App() {
  return (
    <>
      <div className='w-[100vw] h-[160vh] mt-5'>
        <div className='grid grid-cols-5 w-[60vw] mx-auto h-[150vh] border shadow-2xl	'>
          <div className='col-span-2 bg-blue-900 flex flex-col'>
            <div className='avatar mx-auto mt-36 rounded-full'>
              <img
                src='/images/avatars/avatar1.png'
                className='h-[170px] w-[170px] rounded-full  object-cover object-right-top'
                alt='avatar'
              />
            </div>
            <Contact
              phoneNumber='+84 0932542278'
              emailAddress='quocdat3b@gmail.com'
              address='174 nguyen chi thanh, hoi an, quang nam'
            ></Contact>
            <Expertise
              expertise1='Laravel'
              exertise1Count={3}
              expertise2='nextjs'
              exertise2Count={4}
              expertise3='reactjs'
              exertise3Count={4}
              expertise4='nodejs'
              exertise4Count={3}
              expertise5='figma'
              exertise5Count={3}
            ></Expertise>
            <PersonalSkills></PersonalSkills>
          </div>
          <div className='col-span-3 bg-white'>
            <div className='mx-auto mt-[50px] text-blue text-4xl text-blue-800 w-[300px] text-center leading-snug'>
              <span className='font-semibold'>Lê Quốc</span>
              <br />
              <span className='mx-auto'>Đạt</span>
              <br />

              <span className='text-blue text-3xl font-semibold text-blue-800 w-[300px] leading-normal'>
                Web Developer
              </span>
            </div>
            <div className='About-me ml-[100px] mt-[50px] text-black'>
              <h3 className='uppercase  font-semibold'>About me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cupiditate ipsam ut earum quod, corrupti omnis ducimus
                explicabo iste reprehenderit ipsum amet veniam harum libero
                aspernatur, aut sint repellat. Neque!
              </p>
            </div>
            <div className='About-me ml-[100px] mt-[50px] text-black'>
              <h3 className='uppercase  font-semibold'>Education</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cupiditate ipsam ut earum quod, corrupti omnis ducimus
                explicabo iste reprehenderit ipsum amet veniam harum libero
                aspernatur, aut sint repellat. Neque!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates a quam vitae suscipit blanditiis. Pariatur reiciendis
                nisi error, aperiam harum quos, quisquam sunt eligendi corporis
                ex, autem voluptas. Nihil, aspernatur.
              </p>
            </div>
            <div className='About-me ml-[100px] mt-[50px] text-black'>
              <h3 className='uppercase  font-semibold'>Work Experience</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cupiditate ipsam ut earum quod, corrupti omnis ducimus
                explicabo iste reprehenderit ipsum amet veniam harum libero
                aspernatur, aut sint repellat. Neque!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cupiditate ipsam ut earum quod, corrupti omnis ducimus
                explicabo iste reprehenderit ipsum amet veniam harum libero
                aspernatur, aut sint repellat. Neque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
