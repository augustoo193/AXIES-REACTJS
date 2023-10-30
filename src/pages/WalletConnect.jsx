import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/icon/connect-1.png'
import img2 from '../assets/images/icon/connect-2.png'
import img3 from '../assets/images/icon/connect-3.png'
import img4 from '../assets/images/icon/connect-4.png'
import img5 from '../assets/images/icon/connect-5.png'
import img6 from '../assets/images/icon/connect-6.png'
import img7 from '../assets/images/icon/connect-7.png'
import img8 from '../assets/images/icon/connect-8.png'

const WalletConnect = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: 'Meta mask',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
            },
            {
                img: img2,
                title: 'Wallet Connect',
                description: ' Dolor lacinia? Donec nulla, deleniti, dis arcu pharetra maecenas dapibus ante nemo! Wisi?'
            },
            {
                img: img3,
                title: 'Formatic',
                description: 'Potenti eleifend faucibus quo vero nibh netus suspendisse unde? Consectetuer aspernatur'
            },
            {
                img: img5,
                title: 'Wallet Connect',
                description: 'Sollicitudin iure conubia vivamus habitasse aptent, eligendi deserunt excepteur tellus non'
            },
            {
                img: img6,
                title: 'Meta Mask',
                description: 'Purus irure lacinia eiusmod inventore bibendum habitant potenti non sint rem! Felis, asper'
            },
            {
                img: img7,
                title: 'Formatic',
                description: 'Varius culpa, aspernatur accusantium? Corporis rhoncus, voluptatibus incididunt, velit'
                
            },
            
            
        ]
    )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Connect Wallet</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Connect Wallet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                        </div>
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2">
                                {
                                    data.map((item,index) => (
                                        <div key={index} className="sc-box-icon">
                                            <div className="img">
                                                <img src={item.img} alt="Axies" />
                                            </div>
                                            <h4 className="heading"><Link to="/login">{item.title}</Link> </h4>
                                            <p className="content">{item.description}</p>
                                         </div>
                                    ))
                                }
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WalletConnect;
