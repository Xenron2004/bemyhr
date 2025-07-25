'use client';

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open('https://wa.me/919594465739', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="font-poppins cursor-pointer  bg-[#0146B1] font-medium flex items-center justify-center rounded-[8px] text-white text-[16px] w-full py-3 px-7"
    >
      Contact Us
    </button>
  );
}
