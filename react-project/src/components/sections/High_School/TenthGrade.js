import React from 'react'
import { Link } from "react-router-dom";

function TenthGrade() {
  return (
    <div>

    <ul>
        <li>
        <Link  to="./biologyi_ten">بیولوژی</Link>
        </li>
        <li>
        <Link   to="./chemistryi_ten">کیمیا</Link>
        </li>
        <li>
        <Link   to="./clvici_ten">تعلیمات مدنی</Link>
        </li>
        <li>
        <Link  to="./computer_ten">کمپیوتر</Link>
        </li>
        <li>
        <Link   to="./english_ten">انگلیسی</Link>
        </li>
        <li>
        <Link  to="./geographyi_ten">جغرافیه</Link>
        </li>
        <li>
        <Link   to="./geologyi_ten">جیولوژی</Link>
        </li>
        <li>
        <Link   to="./historyi_ten">تاریخ</Link>
        </li>
        <li>
        <Link  to="./biologyi_ten">(حنفی)تعلیم و تربیت اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamichanafi_ten">(جعفری)تعلیم و تربیت اسلام</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_ten">ریاضی</Link>
        </li>
        <li>
        <Link  to="./math_ten">فزیک</Link>
        </li>
        <li>
        <Link   to="./pashto_ten">تفسیر</Link>
        </li>
        <li>
        <Link   to="./dari_ten">دری</Link>
        </li>
        <li>
        <Link   to="./pashto_ten">پشتو</Link>
        </li>
    </ul> 

</div>
  )
}

export default TenthGrade