import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    // {
    //   question:
    //     'How long does it take to build a website?',
    //   answer:
    //     'The timeline for website development depends on the complexity and scope of the project. Generally, it can range from a few weeks for a basic website to several months for a more intricate and customized solution.',
    // },
    // {
    //   question:
    //     'Can I add new products on my website myself?',
    //   answer:
    //     'Absolutely! We provide a user-friendly easy to follow tutorials that allows you to easily update and manage your website’s products and content, including text, images, and multimedia elements.',
    // },
    // {
    //   question:
    //     'Will my website be mobile-friendly?',
    //   answer:
    //     'Yes, all our websites are designed and developed to be fully responsive, ensuring they adapt seamlessly to different screen sizes and devices, providing an optimal user experience for mobile users.',
    // },
    // {
    //   question:
    //     'Can you assist with domain registration and hosting?',
    //   answer:
    //     'Yes, we offer domain registration services and can help you choose the right domain name for your business. We also provide hosting solutions to ensure your website is securely stored and accessible online.',
    // },
    // {
    //   question:
    //     'Can you help with ongoing website maintenance and updates?',
    //   answer:
    //     'Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. We can assist with regular updates, security patches, backups, and resolving any technical issues that may arise.',
    // },
    // {
    //   question:
    //     'What if I need additional features or functionality in the future?',
    //   answer:
    //     'Our websites are built to be scalable and expandable. If you require additional features or functionality in the future, we can discuss your needs and provide solutions to enhance your website’s capabilities, ensuring it evolves alongside your business.',
    // },
    // // Add more FAQ data objects here...
  ];

  return (
    <div className="wrapper">
      <h1 className='!w-full md:!w-[30vw]  m-auto'>Got questions?
        Well, we've got answers</h1>
      <div className='flex flex-col gap-8'>
        {faqData.map((faq, index) => (
          <div onClick={() => handleAccordionClick(index)} className="bg-[#fff] border-t-2 border-[#0000001A] border-b-2 relative  text-[#000] w-[80vw] m-auto  flex flex-col  px-5 py-6  select-none">
            <div className="number">{index + 1}</div>
            <div className="flex items-centert justify-between">
              <div className="flex items-center justify-center space-x-8">
                <div className="apple text-[16px]  select-none ">{faq.question}</div>
              </div>
              <svg className='faq-svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className={`pannel ${activeAccordion === index ? 'active' : ''}`} >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
