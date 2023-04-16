import React from 'react'
import { Link } from "react-router-dom";

const SecondGrade = () => {
  return (
    <div>
            <ul>
        <li>
        <Link  to="./art_second">هنر</Link>
        </li>
        <li>
        <Link   to="./dri_second">دری</Link>
        </li>
        <li>
        <Link   to="./quran_second">قرآن</Link>
        </li>
        <li>
        <Link  to="./hand_writing_second">حسن خط</Link>
        </li>
        <li>
        <Link   to="./life_skill_second">مهارت های زندگی</Link>
        </li>
        <li>
        <Link  to="./islamic_hanafi_second">(حنفی)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_second">(جعفری)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./math_scond">ریاضی</Link>
        </li>
    </ul> 
    </div>
  )
}

export default SecondGrade