"use client";

const Tariff2 = () => {
  return (
    <section className="bg-black text-white font-sans py-24 px-4 flex justify-center items-center">
      <div className="w-full max-w-3xl border border-white/20 rounded-3xl p-8 md:p-16 relative overflow-hidden bg-zinc-900/30 backdrop-blur-md shadow-2xl">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold inline-block relative border-b-2 border-white pb-2 px-4 uppercase tracking-wider">
            Ticket Tariff
          </h2>
        </div>

        <div className="flex justify-center relative z-10 text-left">
          {/* Individual Ticket Column */}
          <div className="space-y-8 w-full max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide border-l-4 border-[#EB0028] pl-4">
              Individual Ticket
            </h3>

            <div className="space-y-6 text-lg">
              {/* Item 1 */}
              <div className="border-b border-white/10 pb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-zinc-300 font-medium">
                    Ticket Price
                  </span>
                  <span className="text-2xl font-bold text-white">1200/-</span>
                </div>
                <p className="text-sm text-zinc-500 italic mt-1 font-light">
                  *regular ticket
                </p>
              </div>

              {/* Item 2 */}
              {/* <div className="border-b border-white/10 pb-4 relative group">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-white font-bold relative pl-4">
                    <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#EB0028]" />
                    Early Bird
                  </span>
                  <span className="text-2xl font-bold text-[#EB0028]">
                    1050/-
                  </span>
                </div>
                <p className="text-sm text-zinc-500 italic mt-1 font-light">
                  *Early Bird is only for the first 25 tickets
                </p>
              </div> */}

              {/* Item 3 */}
              <div className="border-b border-white/10 pb-4 pt-2">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-zinc-300 font-medium">
                    School Student
                  </span>
                  <span className="text-2xl font-bold text-white">800/-</span>
                </div>
                <p className="text-sm text-zinc-500 italic mt-1 font-light">
                  *ID Card is mandatory
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariff2;
