import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/icon/Wallet.png'
import icon2 from '../../assets/images/icon/Category.png'
import icon3 from '../../assets/images/icon/Image2.png'
import icon4 from '../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "ITLC Token",
            description: "O ITLC Token representa o futuro das finanças digitais. Oferecemos segurança, rapidez e descentralização. Nossa missão é proporcionar acesso global a soluções financeiras inovadoras. Junte-se a nós e faça parte da revolução financeira com o ITLC Token.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "BC Token",
            description: "BC Token é a chave para um mundo de transações digitais rápidas, seguras e sem fronteiras. Com tecnologia avançada e compromisso com a inovação, estamos moldando o amanhã das finanças. Descubra o poder da simplicidade com BC Token.",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "ZDollar",
            description: "Bem-vindo ao futuro das finanças digitais com ZDollar. Nossa missão é simplificar e aprimorar suas transações online, proporcionando segurança e eficiência. Com ZDollar, as possibilidades são infinitas. Junte-se a nós na jornada rumo a uma experiência financeira inovadora.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "ZCaw",
            description: "ZCaw é a ponte para um mundo financeiro mais inteligente e conectado. Nossa plataforma inovadora oferece soluções financeiras avançadas com facilidade e eficiência. Descubra a simplicidade na complexidade financeira com ZCaw.",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon create style1 tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-22">
                            <h2 className="tf-title pb-17">
                                 Tokenz </h2>                         
                        </div>
                    </div>
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
            <div className="image">
                <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                             
            </div>
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default Create;
