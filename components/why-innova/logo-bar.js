import tataLogo from '@/assets/logos/tata-logo.png'
import infosysLogo from '@/assets/logos/Infosys-Logo.png'
import wiproLogo from '@/assets/logos/wipro-logo.png'
import accentureLogo from '@/assets/logos/Accenture-Logo.png'
import capgeminiLogo from '@/assets/logos/capgemini-logo.png'
import ibmLogo from '@/assets/logos/ibm-logo.png'
import cognizantLogo from '@/assets/logos/Cognizant-logo.png'
import ltLogo from '@/assets/logos/L&T.png'

import Logo from './logo'

export default function LogoBar() {
    const logos = [
        {
            logo: tataLogo,
            name: 'tataLogo'
        },
        {
            logo: infosysLogo,
            name: 'infosysLogo'
        },
        {
            logo: wiproLogo,
            name: 'wiproLogo'
        },
        {
            logo: accentureLogo,
            name: 'accentureLogo'
        },
        {
            logo: capgeminiLogo,
            name: 'capgeminiLogo'
        },
        {
            logo: ibmLogo,
            name: 'ibmLogo'
        },
        {
            logo: cognizantLogo,
            name: 'cognizantLogo'
        },
        {
            logo: ltLogo,
            name: 'ltLogo'
        },
    ]
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 md:place-items-center md:text-left lg:flex lg:flex-row justify-center items-center gap-5 md:gap-10 pt-5">
            {
                logos.map(logo => (
                    // logo
                    <Logo key={logo.name} logo={logo.logo} name={logo.name} />
                ))
            }
        </div>
    )
}