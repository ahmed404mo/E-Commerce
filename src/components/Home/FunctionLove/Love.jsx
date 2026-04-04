import { useState, useEffect } from "react";


export function useLove() {
      const [act, setAct] = useState(() => {
    const love = localStorage.getItem("love");
    return love ? JSON.parse(love) : {};
  })
  const handel = (id) => {
    setAct(prev => {
      const updata = { ...prev, [id]: !prev[id] };
      localStorage.setItem("love", JSON.stringify(updata));
      return updata;
    })
  }
return {act, handel}
}