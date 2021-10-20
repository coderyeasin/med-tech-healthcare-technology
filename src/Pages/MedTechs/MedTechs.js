import React from 'react';
import { Container, Row } from 'react-bootstrap';
import tech1 from '../../Images/Services/brain-tech.jpg'
import tech2 from '../../Images/Services/diagnose-technology.jpg'
import tech3 from '../../Images/Services/mental-health.jpg'

const MedTechs = () => {
    return (
        <Container className="my-5 py-4">
             <h3 className="text-primary text-center mt-5 pt-3">Best Technology For Medical Universe</h3>
        <Row>
            <div className="col-md-4 my-5 py-5">
                <h3 className="text-primary text-center"> Brain Tech </h3>
                    <img className="img-fluid" src={tech1} alt="" />
                    <article>
                    <p>Most adults use the internet daily, and nearly one out of four report being online most of the time.1 Because of this transformation to an online world, neuroscientists have begun focusing their attention on how digital technology may be changing our brains and behavior. The emerging data suggest that constant technology use impacts brain function and behavior in both positive and negative ways. For example, older individuals suffering from cognitive decline could use the internet to access information to help them remain independent longer; </p>
                </article>
            </div>
            <div className="col-md-4 my-5 py-5">
            <h3 className="text-primary text-center"> Diagnose Tech </h3>
                    <img className="img-fluid" src={tech2} alt="" />
                    <article className="px-2">
                    <p>In recent decades, the development and improvement of technology is rapidly advancing. The development of science, new materials, information technology, new procedures and other modern achievements were his first confirmation sought to improve living conditions, particularly in achieving better health conditions. In an effort to improve living conditions, solve the problem of severe diseases and to facilitate treatment, new technologies, </p>
                </article>
            </div>
            <div className="col-md-4 my-5 py-5">
            <h3 className="text-primary text-center"> Mental Health</h3>
                    <img className="img-fluid" src={tech3} alt="" />
                    <article>
                    <p>First, the papers that report small or null effects usually focus on ‘screen time’, but it is not films or video chats with friends that damage mental health. When research papers allow us to zoom in on social media, rather than looking at screen time as a whole, the correlations with depression are larger, and they are larger still when we look specifically at girls.</p>
                </article>
            </div>
            </Row>
            <Row>
            <div className="col-md-4 ">
                <h3 className="text-primary text-center"> Brain Tech </h3>
                    <img className="img-fluid" src={tech1} alt="" />
                    <article>
                    <p>Our group’s functional magnetic resonance imaging (MRI) research tracking neural activity during simulated internet searches suggests that simply searching online may represent a form of mental exercise that can strengthen neural circuits.3 By contrast, the persistent multitasking that is characteristic of most technology users impairs cognitive performance.</p>
                </article>
            </div>
            <div className="col-md-4 ">
            <h3 className="text-primary text-center"> Diagnose Tech </h3>
                    <img className="img-fluid" src={tech2} alt="" />
                    <article className="px-2">
                    <p>almost always find its first application in medicine. In such conditions of general pressure of new modern technologies, health professionals often succumb to uncritically use these technologies. Methodology: Analyzing data collected from 30,000 research papers that have done 30 doctors of family medicine and 30 doctors of general medicine, and from interviews conducted with all 60 doctors who participated in the research.</p>
                </article>
            </div>
            <div className="col-md-4">
            <h3 className="text-primary text-center"> Mental Health</h3>
                    <img className="img-fluid" src={tech3} alt="" />
                    <article>
                    <p>A sudden increase in the rates of depression, anxiety and self-harm was seen in adolescents — particularly girls — in the United States and the United Kingdom around 2012 or 2013 (see go.nature.com/2up38hw). Only one suspect was in the right place at the right time to account for this sudden change: social media. Its use by teenagers increased most quickly between 2009 and 2011, by which point two-thirds of 15–17-year-olds were using it on a daily basis1. Some researchers defend social media, arguing that there is only circumstantial evidence for its role in mental-health problems2,3. And, indeed, several studies2,3 show that there is only a small correlation between time spent on screens and bad mental-health outcomes. However, I present three arguments against this defence. </p>
                </article>
            </div>
       </Row>
    </Container>
    );
};

export default MedTechs;