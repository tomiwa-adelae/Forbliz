export const CertificationBar = () => {
  return (
    <div className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Replace with actual regulatory logos */}
          <div className="text-sm font-black text-slate-900 tracking-tighter">
            MINISTRY OF MINES
          </div>
          <div className="text-sm font-black text-slate-900 tracking-tighter">
            COREN CERTIFIED
          </div>
          <div className="text-sm font-black text-slate-900 tracking-tighter">
            ISO 9001:2015
          </div>
          <div className="text-sm font-black text-slate-900 tracking-tighter">
            NSITF COMPLIANT
          </div>
        </div>
      </div>
    </div>
  );
};
