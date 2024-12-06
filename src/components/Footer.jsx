// import React from 'react'
// import { assets } from './../assets/assets';

// const Footer = () => {
//   return (
//     <div>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//             <div>
//                 <img src={assets.artisanLogo} className='mb-5 w-32' alt="" />
//                 <p className='w-full md:w-2/3 text-gray-600'>By supporting The Artisans Collective, you’re empowering artisans, preserving traditional crafts, and embracing sustainable, handmade artistry.</p>
//             </div>
//             <div>
//                 <p className='text-xl font-medium mb-5'>COMPANY</p>
//                 <ul className='flex flex-col gap-1 text-gray-600'>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Delivery</li>
//                     <li>Privacy Policy</li>
//                 </ul>
//             </div>
//             <div>
//                 <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//                 <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>+1-252-456-1110</li>
//                 <li>contact@artisanscollective.com</li>
//                 </ul>
//             </div>
//         </div>
//         <div>
//             <hr/>
//             <p className='py-5 text-sm text-center'>
//                 Copyright theartisanscollective - All Rights Reserved.
//             </p>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <a href="https://github.com/rangari-rani" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/rani-rangari/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.hackerrank.com/profile/ranirangari" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faHackerrank} size="2x" />
          </a>
          <a href="mailto:ranirangari2@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a> */}
        </div>
        <p style={styles.text}>© Rani Rangari.      All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    // backgroundColor: "pink",
    color: "black",
    padding: "20px 10px",
    textAlign: "center",
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "10px",
  },
  icon: {
    color: "black",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  text: {
    fontSize: "14px",
  },
};

export default Footer;
