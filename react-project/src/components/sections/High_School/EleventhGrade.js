import React from 'react'
import { Link } from "react-router-dom";

const EleventhGrade = () => {
  return (
    <div>
      <ul>
        <li>
        <Link  to="./biologyi_eleven">بیولوژی</Link>
        </li>
        <li>
        <Link   to="./chemistryi_eleven">کیمیا</Link>
        </li>
        <li>
        <Link   to="./clvici_eleven">تعلیمات مدنی</Link>
        </li>
        <li>
        <Link  to="./computer_eleven">کمپیوتر</Link>
        </li>
        <li>
        <Link   to="./english_eleven">انگلیسی</Link>
        </li>
        <li>
        <Link  to="./geographyi_eleven">جغرافیه</Link>
        </li>
        <li>
        <Link   to="./historyi_eleven">تاریخ</Link>
        </li>
        <li>
        <Link  to="./biologyi_eleven">(حنفی)تعلیم و تربیت اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamichanafi_eleven">(جعفری)تعلیم و تربیت اسلام</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_eleven">ریاضی</Link>
        </li>
        <li>
        <Link  to="./math_eleven">فزیک</Link>
        </li>
        <li>
        <Link   to="./pashto_eleven">تفسیر</Link>
        </li>
        <li>
        <Link   to="./dari_eleven">دری</Link>
        </li>
         <li>
        <Link   to="./dari_eleven">پشتو</Link>
        </li>
    </ul> 
    </div>
  )
}

export default EleventhGrade