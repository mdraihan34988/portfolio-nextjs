import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { popUpFromBottomForText } from "../FramerMotion/FramerMotionVariants";
import AnimatedText from "../FramerMotion/AnimatedText";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import ContactForm from "./ContactForm";

export default function ContactForms() {
  return (
    <div id="contact" className="dark:bg-darkPrimary !relative">
      {/* Get in touch top section */}

      {/* Wrapper Container */}
      <section className="flex flex-col lg:flex-row w-full mx-auto px-5 dark:bg-darkPrimary dark:text-white lg:pb-10">
        {/* Left Contact form section */}
        <div className="w-full mx-auto">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="text-2xl font-bold w-full  text-black dark:text-white text-center my-2"
            infinity=""
          >
            Connect with me
          </AnimatedHeading>

          <ContactForm />
          <div className="mapouter w-full">
          <div className="gmap_canvas">
            <iframe
              width={600}
              height={500}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=narayanganj&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
            <a href="https://fmovies-online.net">fmovies</a>
            <br />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;height:500px;width:600px;}"
              }}
            />
            <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}"
              }}
            />
          </div>
        </div>
        </div>
       
      </section>
      
    </div>
  );
}