import Image from "next/image";

export default function page() {
  return (
    <div className='m-1 mb-5'>
      <h1 className="my-5 text-center text-2xl md:text-4xl text-gray-900 font-bold">The President Corner</h1>
      <div className="flex flex-col md:flex-row gap- bg-[url(/assets/cfg-logo000.png)] bg-no-repeat bg-center md:p-20">
       <div className="bg-white/30 backdrop-blur-none border-1 border-black rounded-xl p-4 ">
         <div className="p-10 items-center justify-items-center">
        <Image src="/assets/prespic.jpeg"alt="" width={200} height={100} className="rounded-full" />
            <div className="text-gray-900 font-bold text-center m-2">
            <h5>PRESIDENT/FOUNDER</h5>
            <h4>Engr, Franklin Siminialayi Cookey</h4>
            </div>
        </div>
        <div className="flex flex-col gap-5 text-black text-md ">
            <p>Engr, Franklin Siminialayi Cookey is the President and Founder of The Cookey Franklins Group located at No 1A, Cookey Franklins Lane, Behind OPIC Plaza, MTR Estate by Opic Bus stop, Off Lagos-Ibadan Express way, Isheri-North. The Group has the following listed companies and foundation as its members; Cookey Franklins Consulting Limited, Cfan Contractors Limited, Cfoil Energy Services (Nig) Limited and the Cookey Franklins Foundation.</p>
            <p>Engr, Cookey is a Second Class Upper Graduate of Computer Science. He holds an MBA in Business Management and Finance from the London School of Business and Finance.</p> 
            <p>Engr, Cookey is a Microsoft Certified Professional and a Cisco Certified Network Associate. He is a Certified Industrial Statistician and a member of the Nigerian Institute of Industrial Statisticians. He also had numerous trainings oversees which includes practical management courses in Human Resources, Capital Management and Re-Engineering.</p>
            <p>Prior to the formation of The Cookey Franklins Group, he worked with Peers Consulting Limited as an associate consultant between 1998 and 2000. He then joined Skivam Business Solutions as the Business Systems Analyst and rose to the position of the companys General Manager by 2002. Engr. Cookey then joined Basscomm Nigeria Limited as the Chief Technology Officer-CTO where he afterwards resigned in 2005 to start Cookey Franklins Consulting Limited which is the parent or holding company of the Group.</p>
        </div>
       </div>
      </div>

        
    </div>
  )
}