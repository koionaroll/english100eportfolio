import React, { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  justify-content: center;
  align-items: left;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 30vh;
  color: #282c34;
  width: 70vw;
`;

const Email = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-end;

  h1 {
    width: 100%;
    text-align: left;
    padding: 1rem 0 0rem;
  }
  input {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
  }
  textarea {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    height: 10rem;
    display: flex;
    top: 0;
  }
  button {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    font-weight: 800;
    width: 18rem;
    background-color: #dddddd;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 420px) {
      width: 100%;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TopLeftButton = styled.button`
  height: 1rem;
  margin-top:20rem;
  width: 1rem;
  background-color: #f4f4f4;
  cursor: pointer;
  border: none;
  font-size:3rem;
  font-weight:450;

`;

function Contact() {
  const ref = useRef(null);
  const [success, setSuccess] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [reload, setReload] = useState(0);

  console.log(import.meta.env.VITE_SERVICE_ID)

  const clickUp = () => {
    window.scrollBy(0, -1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      ref.current.name.value === "" ||
      ref.current.email.value === "" ||
      ref.current.message.value === ""
    ) {
      setEmpty(true);
      return;
    } else {
      setEmpty(false);
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            setReload(1);
            setTimeout(() => {
              setReload(2);
              setTimeout(() => {
                setReload(3);
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Container>
      <TopLeftButton onClick={clickUp}>^</TopLeftButton>
      <Content>
        <Email ref={ref} onSubmit={handleSubmit}>
          <h1>Get in Touch!</h1>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea
            name="message"
            placeholder="Write me anything // Écrivez-moi en français aussi"
            rows={10}
          />
          <button type="submit" value="Send">
            Send
          </button>
          <section>
            {success
              ? "Your message has been sent. I will get back to you shortly :) "
              : null}
            {empty ? "Please fill out all empty forms." : null}
            <div>
              {reload === 1 ? "Reloading in 3 ... " : null}
              {reload === 2 ? "Reloading in 2 ... " : null}
              {reload === 3 ? "Reloading in 1 ... " : null}
            </div>
          </section>
        </Email>
      </Content>
    </Container>
  );
}

export default Contact;
