import Linux from '@/assets/logos/linux.png'
import Git from '@/assets/logos/git.png'
import Docker from '@/assets/logos/docker.png'
import Kubernetes from '@/assets/logos/kubernets.png'
import RedHat from '@/assets/logos/red-hat.png'
import Terraform from '@/assets/logos/terraform.png'
import Jenkins from '@/assets/logos/jenkins.png'
import Ansible from '@/assets/logos/ansible.png'

import Logo from './logo'

export default function LogoBar() {
    const logos = [
        {
            logo: Linux,
            name: 'Linux'
        },
        {
            logo: Git,
            name: 'git'
        },
        {
            logo: Docker,
            name: 'docker'
        },
        {
            logo: Kubernetes,
            name: 'kubernetes'
        },
        {
            logo: RedHat,
            name: 'Red Hat Openshift'
        },
        {
            logo: Terraform,
            name: 'Terraform'
        },
        {
            logo: Jenkins,
            name: 'Jenkins'
        },
        {
            logo: Ansible,
            name: 'ANSIBLE'
        },
    ]
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 md:place-items-center md:text-left lg:flex lg:flex-row justify-center items-center gap-5 md:gap-10 pb-5 border-b border-gray-200">
            {
                logos.map(logo => (
                    // logo
                    <Logo key={logo.name} logo={logo.logo} name={logo.name} />
                ))
            }
        </div>
    )
}