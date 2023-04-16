import React from 'react'
import { Link } from "react-router-dom";

const EightGrade = () => {
  return (
    <div>
       <ul>
        <li>
        <Link  to="./biologyi_eight">بیولوژی</Link>
        </li>
        <li>
        <Link   to="./chemistryi_eight">کیمیا</Link>
        </li>
        <li>
        <Link   to="./clvici_eight">تعلیمات مدنی</Link>
        </li>
        <li>
        <Link  to="./art_eight">هنر</Link>
        </li>
        <li>
        <Link   to="./english_eight">انگلیسی</Link>
        </li>
        <li>
        <Link  to="./geographyi_eight">جغرافیه</Link>
        </li>
        <li>
        <Link   to="./arabic_eight">عربی</Link>
        </li>
        <li>
        <Link   to="./historyi_eight">تاریخ</Link>
        </li>
        <li>
        <Link  to="./islamichanafi_eight">(حنفی)تعلیم و تربیت اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_eight">(جعفری)تعلیم و تربیت اسلام</Link>
        </li>
        <li>
        <Link   to="./math_eight">ریاضی</Link>
        </li>
        <li>
        <Link  to="./physic_eight">فزیک</Link>
        </li>
        <li>
        <Link   to="./tajweed_eight">تجوید</Link>
        </li>
        <li>
        <Link   to="./profession_eight">حرفه</Link>
        </li>
        <li>
        <Link   to="./watan_dosti_eight">وطن دوستی</Link>
        </li>
        <li>
        <Link   to="./dari_eight">دری</Link>
        </li>
        <li>
        <Link   to="./pashto_eight">پشتو</Link>
        </li>
    </ul> 
    </div>
  )
}

export default EightGrade