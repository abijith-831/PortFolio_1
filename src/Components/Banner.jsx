import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/luffyop.svg'

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


  return (
    <section className='banner' id='home'> 
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'> Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Abhijith`} </h1>
                    <h1 className='wrap'>{text}</h1>
                    <p>Passionate and detail-oriented full-stack developer with 1 year of experience in MERN stack development.
                    Proficient in building scalable web applications using JavaScript, React.js, Node.js, and MongoDB. Strong
                    problem-solving skills, a commitment to continuous learning, and a proven ability to deliver impactful solutions</p>
                    <a href="/Abhijith_CV.pdf" download>
                        <button>
                            Download CV <ArrowDownCircle size={30} />
                        </button>
                    </a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="header image" style={{ maxWidth: '60%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
