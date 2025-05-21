import React from 'react';

const   GoogleMap = () => {
  return (
    <>
    <div style={{ width: '100%', height: '450px' }}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198753.96265634682!2d72.65747021031866!3d21.15944056808795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1746882031775!5m2!1sen!2sin" width="100%" height="450" style={{border : "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  );
};

export default GoogleMap;
