import React from 'react'
import './Style.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/Instagram.png'
import card from '../../assets/card.png'
export default function Footer() {
  return <footer class="footer-container">
	  
	  		<div class="container-all-columns">

			
				<div class="footer-left">
					<img src={logo} />
					<h2>3402 Shoreside dr, Garland, Texas 75042</h2>
					<h2>buddystoreus @gmail.com</h2>
					<h2><b>(469)-803-2992</b></h2>
				

					{/* <p class="footer-company-name">© 2021 Buddy Store US</p> */}
				</div>
				<div class="footer-center">
					<h2>Policies</h2>
					<div class="footer-center-content">
						<div className='footer-center-policy'>
							<Link>Refund Policy</Link>
							<Link>Terms of Service</Link>
							<Link>Privacy Policy</Link>
							<Link>Shipping Policy</Link>
						</div>
						<div className='footer-center-product-link'>
							<Link>Best Seller</Link>
							<Link>New Arrivals</Link>
							<Link>Sales</Link>
							<Link>Our Story</Link>
						</div>
					</div>
				</div>
				<div className='footer-right'>
					<h2>Follow Us</h2>
					<img src={facebook} onClick={(e) => {e.preventDefault()
															window.open('https://www.facebook.com/BuddyStore', '_blank')
														}}/>

					<img src={instagram} onClick={(e) => {e.preventDefault()
														window.open('https://www.instagram.com/buddystoreus/', '_blank')
														}}/>
					
				</div>
			</div>
			<div className='bottom-footer'>
				<p>© 2021 Buddy Store US</p>
				<img src={card} />
			</div>
		</footer>
  
}
