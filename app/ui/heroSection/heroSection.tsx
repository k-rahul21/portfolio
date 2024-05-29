import Button from "../button/button";
import Image from "next/image";
import HindiHeading from "../hindiHeading/hindiHeading";

const HeroSection = () => {
    return( 
        <section className="hero-section">  
            <div className="parent-div">
                <div className="left-child">
                    <HindiHeading heading='मेरा परिचय'/>
                    <h1>Hello, <span className="break">my name's Rahul.</span> </h1>
                    {/* <p>Experienced in building robust web application.</p> */}
                    <p>Yes, my name is quite common but, hopefully my work isn't.</p>
                    <Button name={`Let's talk`}/>
                </div>
                <div className="right-child ml-20">
                    <Image 
                        src={'/rahul.jpeg'}
                        alt="photo of myself"
                        width={450}
                        height={650}
                    
                    />    
                </div> 
            </div>
        </section>
    )
}

export default HeroSection
