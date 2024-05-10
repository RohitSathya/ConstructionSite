import React from 'react'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Books from '../components/Books'
import Footer from '../components/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react'
export default function home({func}) {
  const contactFormRef = useRef(null);
  const aboutFormRef=useRef(null)
  const scrollToContactForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
};
const scrollToAboutForm = () => {
  aboutFormRef.current.scrollIntoView({ behavior: 'smooth' });
};
  return (
     <>
         <ToastContainer />
    <Header scrollToContactForm={scrollToContactForm} scrollToAboutForm={scrollToAboutForm}/>
    <Carousel/>
    <Books  func={func} contactFormRef={contactFormRef} />
    <Footer aboutFormRef={aboutFormRef}/>
     </>
  )
}
