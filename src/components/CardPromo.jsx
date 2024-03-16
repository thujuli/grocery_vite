import ButtonOval from './ButtonOval';

function CardPromo(props) {
    const { imageUrl, title, subtitle, bgColor, text, hideImageOnMobile } = props;
    const bgClass = {
        green: 'bg-[#77ba3a]',
        orange: 'bg-[#e58129]',
    }[bgColor] || 'bg-[#c0eb7b]'; 

    return (
      <div className={`flex rounded-lg shadow-lg overflow-hidden ${bgClass} h-[291px] max-w-[380px]`}>
          <div className="py-6 pl-8 mb-5 w-full md:w-[350px] text-left flex flex-col justify-between">
              <div>
                  <h2 
                      className={`mb-3 my-4 text-xs font-bold ${text === 'black' ? 'text-black' :'text-white'}`} 
                      style={{ fontFamily: "Roboto" }}
                  >
                      {title}
                  </h2>
                  <p 
                      className={`text-4xl ${text === 'black' ? 'text-black' :'text-white'}`} 
                      style={{ fontFamily: "Roboto" }}
                  >
                      {subtitle}
                  </p> 
              </div>
              <div className="px-1">
                  <ButtonOval>See All</ButtonOval> 
              </div>
          </div>
          {imageUrl && (
              <div className={`w-full md:w-auto ${hideImageOnMobile ? 'hidden md:flex' : 'flex'} items-center justify-center`}>
                  <img className=" h-full w-full object-cover" src={imageUrl} alt="Promo"/>
              </div>
          )}
      </div>
  );
}

export default CardPromo;