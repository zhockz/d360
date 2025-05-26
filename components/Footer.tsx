"use client";

import Image from 'next/image';
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ locale }: { locale: string }) => {

  const t = useTranslations();

  return(



	  	<footer className="bg-white" data-scroll-section>

	  		<div className="spacer-100"></div>

	  		<div className="container">
	  			<div className="row d-flex align-items-center">
	  				<div className="col-md-10">

	  					<div className="row">
	  						<div className="col-6 col-md-2">
	  							<Link href="" className="nav-link" ><h4 className="ft-title">Security Awareness</h4></Link>
	  							<div className="spacer-20"></div>
	  							<Link href="" className="nav-link"><h4 className="ft-title">Privacy Notice</h4></Link>
	  							<div className="spacer-20"></div>
	  						</div>

	  						<div className="col-6 col-md-2">
	  							<Link href="" className="nav-link"><h4 className="ft-title">Contact Us</h4></Link>
	  							<div className="spacer-20"></div>
	  							<Link href="" className="nav-link"><h4 className="ft-title">Customer Care</h4></Link>
	  							<div className="spacer-20"></div>
	  						</div>

	  						<div className="col-6 col-md-2">
	  							<Link href="" className="nav-link"><h4 className="ft-title">Apple Pay</h4></Link>
	  							<div className="spacer-20"></div>
	  							<Link href="" className="nav-link"><h4 className="ft-title">Careers</h4></Link>
	  							<div className="spacer-20"></div>
	  						</div>

	  						<div className="col-6 col-md-3 justify-content-end">
	  							<Link href="" className="nav-link"><h4 className="ft-title">Customer Protection Principles</h4></Link>
	  							<div className="spacer-20"></div>
	  							<Link href="" className="nav-link"><h4 className="ft-title">Products and Services Fees</h4></Link>
	  							<div className="spacer-20"></div>
	  						</div>

	  						<div className="col-6 col-md-3 text-end">
	  							<h4 className="ft-title fnt-orange">Follow Us</h4>

	  								<ul className="socialMedia d-flex justify-content-end">
	  									<li><Link href=""><FontAwesomeIcon icon={faInstagram} /></Link></li>
	  									<li><Link href=""><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
	  									<li><Link href=""><FontAwesomeIcon icon={faXTwitter} /></Link></li>
	  									<li><Link href=""><FontAwesomeIcon icon={faTiktok} /></Link></li>
	  									<li><Link href=""><FontAwesomeIcon icon={faFacebookF} /></Link></li>
	  								</ul>

	  							<div className="spacer-40"></div>
	  						</div>
	  					</div>

	  					<p>All rights reserved © D360 Bank | Regulated by the Saudi Central Bank|Closed Joint Stock Company with a Capital of SAR 1,650,000,000|CR No. 1010822737 Licensed in accordance with the Council of Ministers decree No. 389 dated 14/07/1443H corresponding to 15/02/2022G|Subject to the supervision of the Saudi Central Bank|3074 Prince Mohammed bin Abdulaziz Rd. Al Olaya Dist. 12213 Riyadh, Saudi Arabia | www.D360.com</p>

	  				</div>

	  				<div className="col-md-2 d-flex justify-content-end">
	  					<Link href="">
	  						<Image src={'/logo/logo-colored.svg'} alt="" className="logo-colored-footer" width={120} height={120}/>
	  					</Link>
	  					<div className="spacer-10"></div>
	  				</div>
	  			</div>
	  		</div>

	  		<div className="spacer-20"></div>

	  		{/*<div className="container">
	  			<div className="row">
	  				<div className="col-md-10">


	  					<p>All rights reserved © D360 Bank | Regulated by the Saudi Central Bank|Closed Joint Stock Company with a Capital of SAR 1,650,000,000|CR No. 1010822737 Licensed in accordance with the Council of Ministers decree No. 389 dated 14/07/1443H corresponding to 15/02/2022G|Subject to the supervision of the Saudi Central Bank|3074 Prince Mohammed bin Abdulaziz Rd. Al Olaya Dist. 12213 Riyadh, Saudi Arabia | www.D360.com</p>

	  					<div className="spacer-10"></div>

	  					<h4 className="ft-title">Exchange Rates</h4>
	  					<p>Convert  INR to GBP | Convert  GBP to SAR | Convert  GBP to CAD | Convert  GBP to JPY | Convert  GBP to SEK | Convert  GBP to EGP | Convert 100 CAD to GBP | Convert 1000 INR to CAD | Convert 100 SGD to INR | Convert 1000 THB to GBP | Convert 1000 JPY to GBP | Compare Exchange Rates</p>	  

	  					<div className="spacer-10"></div>

	  					<p>All rights reserved © D360 Bank | Regulated by the Saudi Central Bank | Closed Joint Stock Company with a Capital of SAR 1,650,000,000 | CR No. 1010822737 Licensed in accordance with the Council of Ministers decree No. 389 dated 14/07/1443H corresponding to 15/02/2022G | Subject to the supervision of the Saudi Central Bank | 3074 Prince Mohammed bin Abdulaziz Rd. Al Olaya Dist. 12213 Riyadh, Saudi Arabia | www.D360.com</p>	  						  					
	  				</div>
	  				<div className="col-md-2"></div>
	  			</div>
	  		</div>	*/}  		

	  		<div className="spacer-80"></div>




	  	</footer>



	  	

	);


};

export default Footer;