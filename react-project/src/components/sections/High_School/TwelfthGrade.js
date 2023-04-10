import React from 'react'
import { Link } from "react-router-dom";

const TwelfthGrade = () => {
  return (
    <div>
      <ul>
        <li>
        <Link  to="./biologyi_twelve">بیولوژی</Link>
        </li>
        <li>
        <Link   to="./chemistryi_twelve">کیمیا</Link>
        </li>
        <li>
        <Link   to="./clvici_twelve">تعلیمات مدنی</Link>
        </li>
        <li>
        <Link  to="./computer_twelve">کمپیوتر</Link>
        </li>
        <li>
        <Link   to="./english_twelve">انگلیسی</Link>
        </li>
        <li>
        <Link  to="./geographyi_twelve">جغرافیه</Link>
        </li>
        <li>
        <Link   to="./historyi_twelve">تاریخ</Link>
        </li>
        <li>
        <Link  to="./biologyi_twelve">(حنفی)تعلیم و تربیت اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamichanafi_twelve">(جعفری)تعلیم و تربیت اسلام</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_twelve">ریاضی</Link>
        </li>
        <li>
        <Link  to="./math_twelve">فزیک</Link>
        </li>
        <li>
        <Link   to="./pashto_twelve">تفسیر</Link>
        </li>
        <li>
        <Link   to="./dari_twelve">دری</Link>
        </li>
        <li>
        <Link   to="./dari_twelve">پشتو</Link>
        </li>
    </ul> 
    </div>
  )
}

export default TwelfthGrade