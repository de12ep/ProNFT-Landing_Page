import React from 'react'
import styles from "../styles/Global";
import assests from "../assets";
import Button from './Button';

const SectionWrapper = ({title,description,
  showBtn,mockupImg, banner ,reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section}
    ${reverse ? styles.bgWhite : styles.bgPrimary} 
    
    ${banner}`}>
     <div className={`flex items-center 
     ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
      <div className={`${styles.descDiv} 
      ${reverse ? "fadeRightMini" : "fadeLeftMin"}
      ${reverse ? styles.textRight : styles.textLeft}
      `}>
        <h1 className={`${styles.h1Text}
        ${reverse ? styles.blackText : styles.whiteText}`}>
        {title}</h1>
        <p className={`${styles.descriptionText}
         ${reverse ? styles.blackText : styles.whiteText}`}>
        {description}</p>

        {showBtn &&(
          <Button
          assetUrl={assests.expo}
          link = "deployed marketplace"
          />
        )}
      </div>
        <div
        className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}
        >
       <img src={mockupImg} alt = "mockup"
        className={`styles.sectionImg
        ${reverse ? "fadeLeftMini" : "fadeRightMin"}`}/>
       </div>
      </div>
    </div>
  )
}

export default SectionWrapper
