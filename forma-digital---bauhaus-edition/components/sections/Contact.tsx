import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-21 bg-white border-t-2 border-black">
      <div className="container mx-auto px-5 md:px-8">
        <div className="bg-[#1A73E8] p-5 md:p-0 border-2 border-black shadow-[21px_21px_0px_0px_#111] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Info Side - 5 columns (approx 41%) - close to 1-0.618 */}
            <div className="lg:col-span-5 bg-[#1A73E8] text-white p-8 md:p-13 flex flex-col justify-between relative">
              
              <div className="relative z-10">
                <h2 className="font-display font-black text-5xl md:text-6xl mb-8 tracking-tighter leading-none">
                  LET'S BUILD <br/> THE FUTURE.
                </h2>
                <p className="text-xl font-light mb-12 border-l-[5px] border-[#F9AB00] pl-5 py-2">
                  Ready to restructure your digital presence? Send us a blueprint of your needs.
                </p>
              </div>

               {/* Decorative Circle */}
               <div className="absolute -bottom-21 -left-21 w-[233px] h-[233px] rounded-full border-[13px] border-white/20"></div>
              
              <div className="space-y-5 font-bold tracking-wide relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-[13px] h-[13px] bg-[#F9AB00] rounded-full"></div>
                  <p>hello@formadigital.com</p>
                </div>
                <div className="flex items-center gap-5">
                   <div className="w-[13px] h-[13px] bg-[#D93025] rounded-full"></div>
                  <p>+1 (555) 161-8033</p>
                </div>
                <div className="flex items-center gap-5">
                   <div className="w-[13px] h-[13px] bg-white rounded-full"></div>
                  <p>Berlin, Germany</p>
                </div>
              </div>
            </div>

            {/* Form Side - 7 columns (approx 58%) - close to 0.618 */}
            <div className="lg:col-span-7 bg-white p-8 md:p-13 border-t-2 lg:border-t-0 lg:border-l-2 border-black">
                <form className="space-y-8">
                <div>
                    <label className="block font-bold uppercase text-sm mb-3 tracking-wider">Name</label>
                    <input 
                    type="text" 
                    className="w-full bg-[#F4F4F0] border-2 border-black p-5 focus:outline-none focus:border-[#D93025] focus:shadow-[5px_5px_0px_0px_#D93025] transition-all"
                    placeholder="Le Corbusier"
                    />
                </div>
                <div>
                    <label className="block font-bold uppercase text-sm mb-3 tracking-wider">Email</label>
                    <input 
                    type="email" 
                    className="w-full bg-[#F4F4F0] border-2 border-black p-5 focus:outline-none focus:border-[#D93025] focus:shadow-[5px_5px_0px_0px_#D93025] transition-all"
                    placeholder="corbu@modulor.com"
                    />
                </div>
                <div>
                    <label className="block font-bold uppercase text-sm mb-3 tracking-wider">Project Scope</label>
                    <select className="w-full bg-[#F4F4F0] border-2 border-black p-5 focus:outline-none focus:border-[#D93025] focus:shadow-[5px_5px_0px_0px_#D93025] transition-all appearance-none cursor-pointer">
                    <option>Branding System</option>
                    <option>Web Development</option>
                    <option>Marketing Strategy</option>
                    </select>
                </div>
                <button className="w-full bg-black text-white font-bold uppercase py-5 border-2 border-transparent hover:bg-[#D93025] hover:border-black hover:shadow-[5px_5px_0px_0px_#111] transition-all tracking-widest text-lg">
                    Submit Inquiry
                </button>
                </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;