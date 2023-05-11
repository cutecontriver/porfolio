import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";
import {link} from '../assets';

const CertificateCard = ({
  index,
  description,
  title,
  company,
  url,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{description}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient text-[14px]'>@</span> {title}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {company}
          </p>
        </div>
        <div className='w-10 h-10 rounded-full object-cover'>
            <div
              onClick={() => window.open(url, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
      </div>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I learnt</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-5`}>
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.name} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates,"")