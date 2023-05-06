import ig from '../../assets/Group_158_jr@2x.png';
import "./ChangeProfile.css"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
<link rel="stylesheet" href="ChangeProfile.css" />;


const ChangeProfile = () => {
	const initialValues = {name:"", lastname:"", username: "", email: "", age: "", senf:""};
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const navigate = useNavigate();
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setFormValues({ ...formValues, [name]: value });
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  setFormErrors(validate(formValues));
	  setIsSubmit(true);
	  
	};
  
	useEffect(() => {
	  console.log(formErrors);
	  if (Object.keys(formErrors).length === 0 && isSubmit) {
		console.log(formValues);
	  }
	}, [formErrors]);
	const validate = (values) => {
	  const errors = {};
	  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	  if (!values.name) {
		errors.name = "!نام ضروری است";
	  }
		if (!values.lastname) {
			errors.lastname = "!تخلص ضروری است";
		}

	  if (!values.username) {
		errors.username = "!نام کاربری ضروری است";
	  }
	  if (!values.email) {
		errors.email = "!ایمیل ضروری است";
	  } else if (!regex.test(values.email)) {
		errors.email = "!این ایمیل معتبر نیست";
	  }
	  if (!values.age) {
		errors.age = "!سن ضروری است";
	 }
	 if (!values.senf) {
		errors.senf = "!صنف ضروری است";
	 }
	  return errors;
	};
  return (
    <div>
		<div>
<div id="Artboard__3">
	<svg className='Rectangle_267_u'>
		<linearGradient id="Rectangle_267_u" spreadMethod="pad" x1="0.22" x2="0.905" y1="-0.035" y2="1.793">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
		</linearGradient>
		<rect id="Rectangle_267_u" rx="200" ry="200" x="0" y="0"  width="1366" height="566">
		</rect>
	</svg>
	<svg className='Ellipse_20'>
		<ellipse id="Ellipse_20" rx="60" ry="60" cx="129" cy="129">
		</ellipse>
	</svg>
	<div id="Group_6">
	
	
	</div>
	<button id="nm">
	تغییر عکس نمایه
	</button>
	<svg class="Path_1010" viewBox="188.817 59.877 1281.845 407.283">
		<path id="Path_1010" d="M 1470.662231445312 467.1603088378906 C 1413.939086914062 453.2845764160156 1351.286376953125 393.6935119628906 1316.156494140625 357.1451416015625 C 1278.387817382812 317.8435363769531 1249.279541015625 267.7673034667969 1245.332641601562 213.4049682617188 C 1243.601440429688 189.5474395751953 1247.116577148438 164.4300079345703 1260.587158203125 144.6602935791016 C 1274.053344726562 124.8861846923828 1298.985717773438 111.8561630249023 1322.296997070312 117.2390975952148 C 1340.044555664062 121.3401641845703 1354.123291015625 134.9824829101562 1364.518920898438 149.9463195800781 C 1379.046630859375 170.861328125 1388.345825195312 196.5646362304688 1384.702880859375 221.7700805664062 C 1377.910278320312 268.8113403320312 1326.7900390625 299.6728210449219 1279.282104492188 298.2411804199219 C 1231.778198242188 296.8051452636719 1188.538696289062 270.846435546875 1151.16650390625 241.4781036376953 C 1086.681518554688 190.8072509765625 1032.609985351562 137.4757080078125 955.5442504882812 105.9005432128906 C 880.6853637695312 75.23283386230469 799.5096435546875 60.95619201660156 718.7920532226562 59.99588012695312 C 612.344970703125 58.72724914550781 499.6823425292969 67.22894287109375 397.723876953125 104.072509765625 C 294.8403015136719 141.2552032470703 119.5603332519531 256.39794921875 217.6644134521484 383.5972290039062 C 273.2601318359375 455.6808471679688 377.636962890625 468.032470703125 456.9448852539062 432.0126953125 C 477.4238586425781 422.7137145996094 492.8809509277344 408.5296325683594 508.1883239746094 393.336669921875">
		</path>
	</svg>
	<svg className='Path_1013' viewBox="520.914 393.094 115.999 89.452">
		<path id="Path_1013" d="M 250.9143676757812 161.4903869628906 L 262.047607421875 202.54638671875 L 271.5810852050781 181.2021789550781 L 317.77392578125 160.4483642578125 L 366.9132690429688 113.0938873291016 L 285.1984252929688 133.8014678955078 L 250.9143676757812 161.4903869628906 Z">
		</path>
	</svg>
	<svg className='Path_1014' viewBox="490.51 393.094 170.332 112.985">
		<path id="Path_1014" d="M 258.5101928710938 181.2021636962891 L 284.5122985839844 216.0793304443359 L 353.8424682617188 113.0938873291016 L 258.5101928710938 181.2021636962891 Z">
		</path>
	</svg>
	<svg className='Path_1015' viewBox="371.085 393.094 140.02 48.396">
		<path id="Path_1015" d="M 266.1068115234375 161.4903869628906 L 382.1057739257812 113.0938873291016 L 242.0853729248047 126.8635711669922 L 266.1068115234375 161.4903869628906 Z">
		</path>
	</svg>
	</div>
	
	<div >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">{navigate('/')}</div>
      ) 
	  : (
        <pre></pre>
      )
	  }

      <form onSubmit={handleSubmit}>
        <div className="container">

			<div className='information-one'>
            <input
            id='input'
			className="username"
              type="text"
              name="username"
              placeholder="تغییر نام کاربری"
              value={formValues.username}
              onChange={handleChange}
            />
			<p className='error'>{formErrors.username}</p>
			<input
            id='input'
			className="senf"
              type="text"
              name="senf"
              placeholder="تغییر صنف"
              value={formValues.senf}
              onChange={handleChange}
            />
          <p className='error'>{formErrors.senf}</p>
			
          </div>

    

         <div className="information-two">
		 <input
         id='input'
		className='lastname'
              type="text"
              name="lastname"
              placeholder="تغییر تخلص"
              value={formValues.lastname}
              onChange={handleChange}
            />
			<p className='error'>{formErrors.lastname}</p>
            
            <input
            id='input'
			className="age"
              type="text"
              name="age"
              placeholder="تغییر سن"
              value={formValues.age}
              onChange={handleChange}
            />
          <p className='error'>{formErrors.age}</p>
		 
		  </div>
		  <div className='information-three'>
		  <input
          id='input'
		className='name'
              type="text"
              name="name"
              placeholder="تغییر نام"
              value={formValues.name}
              onChange={handleChange}
            />
			 <p className='error'>{formErrors.name}</p>
		  <input
          id='input'
			 className="email"
              type="text"
              name="email"
              placeholder=" تغییر ایمیل"
              value={formValues.email}
              onChange={handleChange}
            />
			<p className='error'>{formErrors.email}</p>
			
		  </div>
        </div>
		<button className="save-button">ذخیره کردن</button>
      </form>
    </div>
	<Link to="/header"><img className='ig' src={ig}/></Link> 
</div>
    </div>
  )
}



export default ChangeProfile