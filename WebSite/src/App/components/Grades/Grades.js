import { AuthContext } from "../../context/AuthContext";
import {useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import "./Grades.css"
import sanaf from "../../assets/sanaf.png";
import images from "../../assets/images.png";
import image from "../../assets/Group_158_a@2x.png";
import im from "../../assets/gradesvg.png";
import React from "react";
import { Link, useLocation } from "react-router-dom";
<link rel="stylesheet" href="Grades.css" />;

const Grads = ({ t },props) => {
  

  const location = useLocation();
  const locationData = location.state;
  const grades = locationData.grades;
  const school_path = locationData.school_path;

      // const navigation = useNavigate();
//   if (userInfo === null) {
//     return navigation("/");
//   } else if (isLoading) {
//     return <h1>Loading.....</h1>;
//   } else if(userInfo !== null){
  return (
    <div  className="all-grade">
      <div className="section-one-grades">
      <img className="top-svg-gardes" src={im} />
      </div>
      <div className="section-two-grades">
     <Link to="/section"><img className="flesh-image-grade" src={image} /></Link> 
      </div>

      <div className="section-three-grades">
      <div className="one-gardes">
        <div className="one-one-grades">
        <span className='p-one-grade'>{t("grads1")} </span>
          <br />
          <span className='p-two-grade'>{t("grads2")}</span>
        <div className="button-grade">
          {grades.map((item) => {
            return (
              <Link
                className="link-grade"
                to="/books"
                state={{ 
                subjects: item.subjects,
                grade_path: school_path + item.grade_path,
              }}
              >
                <img className="sanaf-grade" src={sanaf} />
                <div className="li-grade">{item.label}</div>
              </Link>
            );
          })}
        </div>
        </div>
        <svg className="svg-one-grade" viewBox="139.5 0 484.883 429.713">
          <path
            id="svg-one-grade"
            d="M 610.14794921875 429.7131042480469 L 610.1478881835938 429.7131042480469 L 139.5000152587891 429.7131042480469 L 139.5000762939453 56.88452529907227 C 142.6636657714844 55.30181884765625 145.8301849365234 53.55493545532227 148.9121856689453 51.69146347045898 C 157.6087188720703 46.43293380737305 166.0690765380859 40.38887786865234 174.2508392333984 34.54375839233398 C 182.1878356933594 28.87346458435059 190.39501953125 23.01011276245117 198.7838897705078 17.89023017883301 C 203.2928924560547 15.13846492767334 207.4967803955078 12.81334781646729 211.6358947753906 10.78199481964111 C 216.2798309326172 8.503759384155273 220.7174835205078 6.653818130493164 225.2024841308594 5.12646484375 C 230.1383666992188 3.445523738861084 235.2673034667969 2.157053232192993 240.4467163085938 1.296935558319092 C 245.6334228515625 0.4364061653614044 250.9049530029297 5.322983633959666e-05 256.1148376464844 5.322983633959666e-05 C 262.7864685058594 5.322983633959666e-05 269.3885498046875 0.7116414904594421 275.737548828125 2.115053176879883 C 282.2618408203125 3.557406187057495 288.5228881835938 5.733935356140137 294.3467712402344 8.584229469299316 C 304.9234313964844 13.76134777069092 314.3874816894531 21.45458221435547 321.7157897949219 30.8321704864502 C 325.3992919921875 35.54523086547852 328.4963684082031 40.62422943115234 330.9210205078125 45.92793655395508 C 333.4138488769531 51.38458251953125 335.1828308105469 57.05487823486328 336.1787719726562 62.78134918212891 C 338.1053771972656 73.85505676269531 337.3023681640625 85.29622650146484 336.5258483886719 96.36064147949219 L 336.5252990722656 96.368408203125 L 336.5230102539062 96.40093231201172 C 336.13671875 101.9092864990234 335.7376708984375 107.6003494262695 335.6784362792969 113.1831130981445 C 335.2050170898438 157.9399871826172 363.2007751464844 209.5632934570312 410.8697814941406 218.4804077148438 C 416.7393188476562 219.5782928466797 423.0517883300781 220.0895843505859 430.7354736328125 220.0895843505859 C 436.3088989257812 220.0895843505859 441.9808349609375 219.81787109375 447.4660034179688 219.5551147460938 L 447.5250244140625 219.5522918701172 L 447.634765625 219.5469360351562 C 448.9106140136719 219.4852905273438 450.1142578125 219.4283447265625 451.2123107910156 219.3777008056641 C 458.7083740234375 219.0355224609375 465.5153198242188 218.8691711425781 472.0221252441406 218.8691711425781 C 492.8049011230469 218.8691711425781 510.523193359375 220.6187591552734 526.189453125 224.2178802490234 C 535.256103515625 226.3005218505859 543.7909545898438 229.0591125488281 551.5569458007812 232.4169311523438 C 559.9397583007812 236.0425262451172 567.7242431640625 240.4936981201172 574.694091796875 245.6469421386719 C 584.7550048828125 253.0846405029297 593.5451049804688 262.3674011230469 600.8202514648438 273.2373352050781 C 607.6942138671875 283.5078735351562 613.1861572265625 295.1395263671875 617.1435546875 307.8090515136719 C 620.936767578125 319.9537048339844 623.2671508789062 332.8639831542969 624.0698852539062 346.1813354492188 C 624.8555908203125 359.2210083007812 624.1610107421875 372.3390502929688 622.00537109375 385.1712341308594 C 620.569091796875 393.71728515625 618.2904052734375 403.587646484375 615.5892333984375 412.964111328125 C 613.9120483398438 418.7865905761719 612.0814208984375 424.4215087890625 610.148193359375 429.7124633789062 L 610.14794921875 429.7131042480469 Z"
          ></path>
        </svg>
        </div>

        <div className="two-gardes">
          <svg className="svg-two-grade" viewBox="139.5 0 484.883 429.713">
          <path
            id="svg-two-grade"
            d="M 610.14794921875 429.7131042480469 L 610.1478881835938 429.7131042480469 L 139.5000152587891 429.7131042480469 L 139.5000762939453 56.88452529907227 C 142.6636657714844 55.30181884765625 145.8301849365234 53.55493545532227 148.9121856689453 51.69146347045898 C 157.6087188720703 46.43293380737305 166.0690765380859 40.38887786865234 174.2508392333984 34.54375839233398 C 182.1878356933594 28.87346458435059 190.39501953125 23.01011276245117 198.7838897705078 17.89023017883301 C 203.2928924560547 15.13846492767334 207.4967803955078 12.81334781646729 211.6358947753906 10.78199481964111 C 216.2798309326172 8.503759384155273 220.7174835205078 6.653818130493164 225.2024841308594 5.12646484375 C 230.1383666992188 3.445523738861084 235.2673034667969 2.157053232192993 240.4467163085938 1.296935558319092 C 245.6334228515625 0.4364061653614044 250.9049530029297 5.322983633959666e-05 256.1148376464844 5.322983633959666e-05 C 262.7864685058594 5.322983633959666e-05 269.3885498046875 0.7116414904594421 275.737548828125 2.115053176879883 C 282.2618408203125 3.557406187057495 288.5228881835938 5.733935356140137 294.3467712402344 8.584229469299316 C 304.9234313964844 13.76134777069092 314.3874816894531 21.45458221435547 321.7157897949219 30.8321704864502 C 325.3992919921875 35.54523086547852 328.4963684082031 40.62422943115234 330.9210205078125 45.92793655395508 C 333.4138488769531 51.38458251953125 335.1828308105469 57.05487823486328 336.1787719726562 62.78134918212891 C 338.1053771972656 73.85505676269531 337.3023681640625 85.29622650146484 336.5258483886719 96.36064147949219 L 336.5252990722656 96.368408203125 L 336.5230102539062 96.40093231201172 C 336.13671875 101.9092864990234 335.7376708984375 107.6003494262695 335.6784362792969 113.1831130981445 C 335.2050170898438 157.9399871826172 363.2007751464844 209.5632934570312 410.8697814941406 218.4804077148438 C 416.7393188476562 219.5782928466797 423.0517883300781 220.0895843505859 430.7354736328125 220.0895843505859 C 436.3088989257812 220.0895843505859 441.9808349609375 219.81787109375 447.4660034179688 219.5551147460938 L 447.5250244140625 219.5522918701172 L 447.634765625 219.5469360351562 C 448.9106140136719 219.4852905273438 450.1142578125 219.4283447265625 451.2123107910156 219.3777008056641 C 458.7083740234375 219.0355224609375 465.5153198242188 218.8691711425781 472.0221252441406 218.8691711425781 C 492.8049011230469 218.8691711425781 510.523193359375 220.6187591552734 526.189453125 224.2178802490234 C 535.256103515625 226.3005218505859 543.7909545898438 229.0591125488281 551.5569458007812 232.4169311523438 C 559.9397583007812 236.0425262451172 567.7242431640625 240.4936981201172 574.694091796875 245.6469421386719 C 584.7550048828125 253.0846405029297 593.5451049804688 262.3674011230469 600.8202514648438 273.2373352050781 C 607.6942138671875 283.5078735351562 613.1861572265625 295.1395263671875 617.1435546875 307.8090515136719 C 620.936767578125 319.9537048339844 623.2671508789062 332.8639831542969 624.0698852539062 346.1813354492188 C 624.8555908203125 359.2210083007812 624.1610107421875 372.3390502929688 622.00537109375 385.1712341308594 C 620.569091796875 393.71728515625 618.2904052734375 403.587646484375 615.5892333984375 412.964111328125 C 613.9120483398438 418.7865905761719 612.0814208984375 424.4215087890625 610.148193359375 429.7124633789062 L 610.14794921875 429.7131042480469 Z"
          ></path>
        </svg>
        <img id="image-grade" className="image-grade" src={images} /></div>
      </div>
    </div>
  );
        // }
};
export default  withNamespaces()(Grads) ;



