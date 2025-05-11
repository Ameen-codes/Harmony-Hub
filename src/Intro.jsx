import React, { useState, useEffect } from 'react';

function Intro() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const speed = 100;
  const fullText = `The Future of \nMusic Ownership is Here`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < fullText.length) {
        setText(text + fullText.charAt(index));
        setIndex(index + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, index]); 

  return (
    <div className="intro">
      <h1 className='intro_h1 flex items-center'>

        <span>🎵</span> {text} 

        <span>🎵</span> </h1>

     <p className="sub_intro">Mint. Collect. Stream. Earn</p>

    </div>
  );
}

export default Intro;
