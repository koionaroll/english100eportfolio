import styled from "styled-components";
import React from "react";
import profile from "../assets/images/crop.jpg";

const Container = styled.div`
  max-height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #282c34;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vw;

  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
    @media (max-width: 900px) {
      display: none;
    }
  }

  h3 {
    text-align: left;
    text-align-last: left;
    margin: 1rem 0 0;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 1rem;
  }
  :first-child {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 100%;
  }
  p {
    text-align: left;
    text-align-last: left;
    font-size: 1.2rem;
    max-height: 24vh;
    overflow-y: auto;
  }
  button{
    border:none;
    font-size:3rem;
    text-align: left;
    width:100%;
    background-color:#f4f4f4;
    cursor: pointer;
    font-weight:450;
  } 
  :nth-child(5){
    font-size:2rem;
    font-weight:500;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

function Bio() {
  const clickUp = ()=>{
    window.scrollBy(0,-1);
  }
  const clickDown = ()=>{
    window.scrollBy(0,1);
  }
  return (
    <Container>
      <Content>
        <ListContainer>
          <div>
            <section>
            <button onClick={()=>clickUp()}>^</button>
            <h1>About Me</h1>
            </section>
            <img src={profile} alt="profile" />
          </div>
          <div>
            <h3>Who Am I?</h3>
            <p>
              My name’s Khoi, and I’m currently pursuing Engineering at Capilano
              University. Over the past two years, I’ve been working
              professionally across various tech ventures. At the time, I took a
              break from post-secondary education to explore different paths and
              reflect on my goals. During that time, I ran a marathon, worked on
              a boat, and traveled. I also built a computer, which sparked my
              interest in technology and software. I started a small business
              refurbishing used computer parts into full systems for resale, and
              the success I had encouraged me to pursue a career in tech. I
              completed a web development bootcamp and an IT technician
              certificate, eventually landing a role as an implementation
              technician at F3 Technologies. While I’ve learned a lot working in
              the tech industry, my time away from university made me realize
              the importance of post-secondary education. I’m excited to resume
              my studies and finish my Engineering Degree.
            </p>
          </div>
          <div>
            <h3>Work experience and Education</h3>
            <p>
              I’ve had the opportunity to work in diverse roles that have shaped
              my skills and passion for technology. As a full-stack developer, I
              built THIS website from scratch using ViteJS and the React
              framework, with styled SCSS components, and deployed it on
              Netlify. I have experience with creating functional, user-friendly
              platforms from the ground up. Before that, I worked as a CompTIA+
              certified IT technician at F3 Technologies, where I installed
              digital infrastructure for small to medium-sized restaurants
              across the West Coast. I also trained staff on using newly
              installed POS, inventory, and payroll systems while
              troubleshooting client network issues. Additionally, as a
              facilities worker at Capilano University, I developed hands-on
              skills with power tools, hardware, and home improvement tasks.
              These experiences have not only solidified my technical expertise
              but also fueled my desire to pursue further education and use
              engineering to create impactful solutions.
            </p>
          </div>
          <div>
            <h3>Hobbies and Extracurricular</h3>
            <p>
              Having grown up alongside the internet, I have always had an
              interest in technology. This was one of the main catalysts for
              pursuing tech during my break from my education. I enjoy coding,
              and am looking to develop my skills in game development in my
              spare time. Also, I am glad to have gotten the opportunity to work
              as a technician as that has only furthered my appreciation for
              computer hardware. Besides tech, I do triathlon training to stay
              active. As I like to put it, I enjoy the variety of triathlon
              training—whenever I get tired of one form, I can always switch it
              up. Whether it's running, swimming, or biking, each discipline
              keeps me engaged and challenges me in different ways. It’s a great
              way to stay motivated and prevent burnout from doing the same
              thing over and over.
            </p>
          </div>
          <button onClick={()=>clickDown()}>v</button>
        </ListContainer>
      </Content>
    </Container>
  );
}

export default Bio;
