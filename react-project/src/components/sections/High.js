import React from 'react'
import { Link } from "react-router-dom";

const High = () => {
  return (
  <div>

                <ul>
                    <li>
                    <Link  to="./tenth_grade">صنف دهم</Link>
                    </li>
                    <li>
                    <Link   to="./eleventh_grade">صنف یازدهم</Link>
                    </li>
                    <li>
                    <Link   to="./twelfth_grade">صنف دوازدهم</Link>
                    </li>
                </ul> 
            
     </div>
  )
}

export default High