import React from 'react'
import { Link } from "react-router-dom";

const SixthGrade = () => {
  return (
    <div>
          <ul>
        <li>
        <Link  to="./art_sixth">هنر</Link>
        </li>
        <li>
        <Link   to="./dri_sixth">دری</Link>
        </li>
        <li>
        <Link   to="./quran_sixth">قرآن کریم</Link>
        </li>
        <li>
        <Link  to="./hand_writing_sixth">حسن خط</Link>
        </li>
        <li>
        <Link  to="./islamichanafi_sixth">(حنفی)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_sixth">(جعفری)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./math_sixth">ریاضی</Link>
        </li>
        <li>
        <Link   to="./english_sixth">انگلیسی</Link>
        </li>
        <li>
        <Link   to="./pashto_sixth">پشتو</Link>
        </li>
        <li>
        <Link   to="./sicence_sixth">ساینس</Link>
        </li>
        <li>
        <Link   to="./social-sicence_sixth">دروس اجتماعی</Link>
        </li>
    </ul> 
    </div>
  )
}

export default SixthGrade