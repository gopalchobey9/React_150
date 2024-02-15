import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec(prevSec => prevSec + 1);
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      {sec}
    </div>
  )
}

export default Effect
