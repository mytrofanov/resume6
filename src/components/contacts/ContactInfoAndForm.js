import FeedbackForm from "../feedback/FeedbackForm";
import {ContactInfo} from "./ContactInfo";
import * as React from "react";

export const ContactInfoAndForm = () => {
  return (
      <div className="HomePageBottom">
          <div className="feedback">
              <FeedbackForm/>
          </div>
          <div className="contact">
              <ContactInfo/>
          </div>

      </div>
  )
}