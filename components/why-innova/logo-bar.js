import { logosWhyInnova } from '@/lib/logos'
import Logo from './logo'

export default function LogoBar() {
const logos = logosWhyInnova;
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