import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/9933427_4300578.svg'
import { motion } from 'framer-motion'

const Banner = () => {

    const [loopNum , setLoopNum] = useState(0)
    const [isDeleting , setIsDeleting] = useState(false)
    const [text , setText] = useState('')
    const toRotate = ['Web Developer' , 'Full Stack Developer' , 'Mern Stack Developer']
    const [delta , setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1);
    const period = 2000;


    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        },delta)

        return ()=> clearInterval(ticker)
    } , [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
    }


    const downloadCV = ()=>{
      const link = document.createElement('a');
      link.href = '/Abhijith_P_CV.pdf'
      link.download = 'Abhijith_P_CV.pdf'; 
      link.click();
    }


  return (
    <section className='banner' id='home'> 
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <motion.span className='tagline'   initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 4 }}transition={{ duration: 0.1 }}> Welcome to my Portfolio</motion.span>
                    <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 4 }}transition={{ duration: 0.1 }}>{`Hi I'm Abhijith`} </motion.h1>
                    <motion.h1 className='wrap' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 4 }}transition={{ duration: 0.1 }}>{text}</motion.h1>
                    <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 4 }}transition={{ duration: 0.1 }}>Passionate and detail-oriented full-stack developer with 1 year of experience in MERN stack development.
                    Proficient in building scalable web applications using JavaScript, React.js, Node.js, and MongoDB. Strong
                    problem-solving skills, a commitment to continuous learning, and a proven ability to deliver impactful solutions</motion.p>
                    <motion.button onClick={downloadCV} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}transition={{ duration: 0.6 }}>Download CV<ArrowDownCircle size={30}/></motion.button>
                </Col>
                <Col xs={12} md={6} xl={5} className='text-center'>
                    <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 4 }}transition={{ duration: 1 }} src={headerImg} alt="header image" style={{ maxWidth: '90%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    </section> 
  )
}

export default Banner
