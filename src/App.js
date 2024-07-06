// import React, { useState } from 'react';
// import Logo from "./accets/logo.png"
// import Hero from "./accets/hero.png"
// import Refer from "./accets/refer.png"
// import Program from "./accets/program2.png"
// import Second2 from "./accets/secondprogram.png"
// import Third from "./accets/secondprogram3.png"
// import Footer from "./accets/footer.png"
// import { RiArrowDropDownLine } from "react-icons/ri";

// const App = () => {
//   return (<div>
//     <div className="bg-blue-50 text-center p-4">
//       Navigate your ideal career path with tailored expert advice &nbsp; &nbsp;
//       <span className="text-blue-500">contact expert</span>
//     </div>

//     <div className=" w-11/12 p-4 flex items-center justify-between">
     
//       <div className="flex items-center space-x-2 ml-8">
//         <img src={Logo} alt="Logo" className="h-12 w-32" />
      
//         <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300 flex items-center">Courses  &nbsp; <RiArrowDropDownLine /></button>
//       </div>

//       <nav className="flex items-center text-black space-x-4">
        
//         <div className="flex items-center space-x-4 gap-3">
//           <a href="/" className="text-black hover:text-blue-200 transition duration-300">Refer & Earn</a>
//           <a href="/about" className="text-black hover:text-blue-200 transition duration-300">Resources</a>
//           <a href="/contact" className="text-black hover:text-blue-200 transition duration-300">About us</a>
//         </div>

        
//         <button className="bg-blue-100  text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">Login</button>

      
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md border border-white hover:bg-white hover:text-blue-500 transition duration-300">Try for free</button>

       

//       </nav>
//     </div>

//     <div className="bg-blue-50 w-2/5 h-12 flex justify-center items-center mx-auto gap-10 rounded-3xl mt-2">
//       <a href="/" className="text-black hover:text-blue-200 transition duration-300">Refer</a>
//       <a href="/" className="text-black hover:text-blue-200 transition duration-300 ml-4">Benefits</a>
//       <a href="/" className="text-black hover:text-blue-200 transition duration-300 ml-4">FAQs</a>
//       <a href="/" className="text-black hover:text-blue-200 transition duration-300 ml-4">Support</a>
//     </div>



//     <div className="bg-blue-50 w-4/5 h-[460px] flex justify-center items-center mx-auto rounded-lg mt-6 p-4 shadow-md">
     
//       <div className="w-2/5 ml-[5%]">
//         <h1 className="text-5xl font-bold ml-6">Let’s Learn </h1>
//         <h1 className="text-5xl font-bold ml-6">& Earn</h1>
//         <h3 className="text-xl mt-4 ml-6">Get a chance to win </h3>
//         <h3 className="text-xl mt-4 ml-6">up-to <span className='text-2xl text-blue-800 font-bold'>Rs. 15,000</span></h3>
//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 w-32 rounded-md ml-6">Refer Now</button>
//       </div>

    
//       <div className="w-3/5 flex justify-end items-center">
//         <img src={Hero} alt="Hero Image" className="w-full h-auto rounded-lg" />
//       </div>
//     </div>

//     <div className="bg-blue-50 flex flex-col items-center justify-center h-full mt-16">
//       <h3 className="text-center mt-8">
//         How Do I <span className="text-blue-700">Refer?</span>
//       </h3>
//       <img src={Refer} alt="Logo" className="h-[400px] w-[900px]" />

//       <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 w-32 rounded-md ml-6 mb-4">Refer Now</button>
//     </div>

    

// <div className="mt-12 flex flex-col items-center justify-center">
//       <h2 className="text-center mb-4">
//         What Are The <span className="text-blue-500">Referral Benefits?</span>
//       </h2>
//       <img src={Program} alt="Program Image" className="w-[900px] h-auto mb-4" />

//       <button className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
//         Refer Now
//       </button>
//     </div>

//     <div className="mt-12 flex flex-col items-center justify-center">
//     <img src={Second2} alt="Program Image" className="w-[900px] h-auto mb-4" />
//     <img src={Third} alt="Program Image" className="w-[900px] h-auto mb-4" />
//     </div>
//     <div>
//     <img src={Footer} alt="Program Image" className=" h-auto"/>
//     </div>

//   </div>)
// };

// export default App;








import React, { useState } from 'react';
import Logo from "./accets/logo.png"
import Hero from "./accets/hero.png"
import Refer from "./accets/refer.png"
import Program from "./accets/program2.png"
import Second2 from "./accets/secondprogram.png"
import Third from "./accets/secondprogram3.png"
import Footer from "./accets/footer.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import ReferralForm from './ReferralForm'; // Import the ReferralForm component

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
     <div className="bg-blue-50 text-center p-4">
       Navigate your ideal career path with tailored expert advice &nbsp; &nbsp;
       <span className="text-blue-500">contact expert</span>
     </div>

     <div className=" w-11/12 p-4 flex items-center justify-between">
     
      <div className="flex items-center space-x-2 ml-8">
        <img src={Logo} alt="Logo" className="h-12 w-32" />
      
        <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300 flex items-center">Courses  &nbsp; <RiArrowDropDownLine /></button>
      </div>

      <nav className="flex items-center text-black space-x-4">
        
        <div className="flex items-center space-x-4 gap-3">
          <a href="/" className="text-black hover:text-blue-200 transition duration-300">Refer & Earn</a>
          <a href="/about" className="text-black hover:text-blue-200 transition duration-300">Resources</a>
          <a href="/contact" className="text-black hover:text-blue-200 transition duration-300">About us</a>
        </div>

        
        <button className="bg-blue-100  text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">Login</button>

      
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md border border-white hover:bg-white hover:text-blue-500 transition duration-300">Try for free</button>

       

      </nav>
    </div>


    <div className="bg-blue-50 w-2/5 h-12 flex justify-center items-center mx-auto gap-10 rounded-3xl mt-2">
      <a href="/" className="text-black hover:text-blue-200 transition duration-300">Refer</a>
      <a href="/" className="text-black hover:text-blue-200 transition duration-300 ml-4">Benefits</a>
      <a href="/" className="text-black hover:text-blue-200 transition duration-300 ml-4">FAQs</a>
      <a href="/" className="text-black hover:text-blue-200 transition duration-300 ml-4">Support</a>
    </div>

    <div className="bg-blue-50 w-4/5 h-[460px] flex justify-center items-center mx-auto rounded-lg mt-6 p-4 shadow-md">
     
      <div className="w-2/5 ml-[5%]">
        <h1 className="text-5xl font-bold ml-6">Let’s Learn </h1>
        <h1 className="text-5xl font-bold ml-6">& Earn</h1>
        <h3 className="text-xl mt-4 ml-6">Get a chance to win </h3>
        <h3 className="text-xl mt-4 ml-6">up-to <span className='text-2xl text-blue-800 font-bold'>Rs. 15,000</span></h3>
        <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 w-32 rounded-md ml-6">Refer Now</button>
      </div>
       <div className="w-3/5 flex justify-end items-center">
         <img src={Hero} alt="Hero Image" className="w-full h-auto rounded-lg" />
       </div>
      </div>


      {/* Your existing UI */}
      {/* Example button to open the referral form modal */}
      {/* <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 w-32 rounded-md ml-6">Refer Now</button> */}

      {/* Integrate ReferralForm component */}
      <ReferralForm isOpen={isOpen} closeModal={closeModal} />

      {/* Your remaining UI content */}
      <div className="mt-12 flex flex-col items-center justify-center">
        <h2 className="text-center mb-4">
          What Are The <span className="text-blue-500">Referral Benefits?</span>
        </h2>
        <img src={Program} alt="Program Image" className="w-[900px] h-auto mb-4" />

        <button className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Refer Now
        </button>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <img src={Second2} alt="Program Image" className="w-[900px] h-auto mb-4" />
        <img src={Third} alt="Program Image" className="w-[900px] h-auto mb-4" />
      </div>

      <div>
        <img src={Footer} alt="Program Image" className=" h-auto" />
      </div>
    </div>
  );
};

export default App;
