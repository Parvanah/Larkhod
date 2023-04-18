import React from 'react'
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div> 
     <ul>
    <li>
    <Link  to="./art_first">هنر</Link>
    </li>
    <li>
    <Link   to="./dri_first">دری</Link>
    </li>
    <li>
    <Link   to="./quran_first">قرآن</Link>
    </li>
    <li>
    <Link  to="./hand_writing_first">حسن خط</Link>
    </li>
    <li>
    <Link   to="./life_skill_first">مهارت های زندگی</Link>
    </li>
    <li>
    <Link  to="./islamic_hanafi_first">(حنفی)تعلیمات اسلامی</Link>
    </li>
    <li>
    <Link   to="./islamic_jafari_first">(جعفری)تعلیمات اسلامی</Link>
    </li>
    <li>
    <Link   to="./math_first">ریاضی</Link>
    </li>
</ul> 
</div>
  )
}

export default Books