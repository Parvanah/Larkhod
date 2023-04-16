import React from 'react'
import { Link } from "react-router-dom";

const ThirdGrade = () => {
  return (
    <div>
       <ul>
        <li>
        <Link  to="./art_third">هنر</Link>
        </li>
        <li>
        <Link   to="./dri_third">دری</Link>
        </li>
        <li>
        <Link   to="./quran_third">قرآن کریم</Link>
        </li>
        <li>
        <Link  to="./hand_writing_third">حسن خط</Link>
        </li>
        <li>
        <Link   to="./life_skill_third">مهارت های زندگی</Link>
        </li>
        <li>
        <Link  to="./islamic_hanafi_third">(حنفی)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamic_jafari_third">(جعفری)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./math_third">ریاضی</Link>
        </li>
    </ul> 
    </div>
  )
}

export default ThirdGrade