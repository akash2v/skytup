import React from 'react';
import { Helmet } from 'react-helmet';
import './Privacy.css';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Skytup</title>
        <meta name="description" content="Read Skytup's privacy policy to understand how we collect, use, and protect your personal information while using our platform." />
        <meta name="keywords" content="privacy policy,terms of service,data protection,user privacy" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Privacy Policy - Skytup" />
        <meta property="og:description" content="Read Skytup's privacy policy to understand how we collect, use, and protect your personal information while using our platform." />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - Skytup" />
        <meta name="twitter:description" content="Read Skytup's privacy policy to understand how we collect, use, and protect your personal information while using our platform." />
      </Helmet>

      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="subtitle">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website 
            with regards to the information that they shared and/or collect on skytup.com. This policy is not 
            applicable to any information collected offline or via channels other than this website.
          </p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Privacy Policy for Skytup</h2>
            <p>
              At Skytup, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected 
              and recorded by Skytup and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, 
              do not hesitate to contact us.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked 
              to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, 
              email address, phone number, the contents of the message and/or attachments you may send us, 
              and any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact information, including items 
              such as name, company name, address, email address, and telephone number.
            </p>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service, updates, and marketing</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Log Files</h2>
            <p>
              Skytup follows a standard procedure of using log files. These files log visitors when they 
              visit websites. All hosting companies do this and a part of hosting services' analytics. 
              The information collected by log files include internet protocol (IP) addresses, browser type, 
              Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the 
              number of clicks. These are not linked to any information that is personally identifiable. 
              The purpose of the information is for analyzing trends, administering the site, tracking users' 
              movement on the website, and gathering demographic information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Cookies and Web Beacons</h2>
            <p>
              Like any other website, Skytup uses 'cookies'. These cookies are used to store information 
              including visitors' preferences, and the pages on the website that the visitor accessed or visited. 
              The information is used to optimize the users' experience by customizing our web page content based 
              on visitors' browser type and/or other information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>CCPA Privacy Rights</h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul>
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
          </section>

          <section className="privacy-section">
            <h2>GDPR Data Protection Rights</h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul>
              <li>The right to access – Request copies of your personal data</li>
              <li>The right to rectification – Request corrections to inaccurate information</li>
              <li>The right to erasure – Request erasure of your personal data</li>
              <li>The right to restrict processing – Request restriction of data processing</li>
              <li>The right to object to processing – Object to our processing of your personal data</li>
              <li>The right to data portability – Request transfer of your data</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
          </section>

          <section className="privacy-section">
            <h2>Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. 
              We encourage parents and guardians to observe, participate in, and/or monitor and guide 
              their online activity.
            </p>
            <p>
              Skytup does not knowingly collect any Personal Identifiable Information from children under 
              the age of 13. If you think that your child provided this kind of information on our website, 
              we strongly encourage you to contact us immediately and we will do our best efforts to promptly 
              remove such information from our records.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;