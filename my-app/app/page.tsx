import Navbar from './components/Navbar';
import { NavItems } from './components/types';

const navItems: NavItems = [
  { title: 'Awesome SaaS Features', href: '/features' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
  { title: 'Sign up', href: '/sign-up', outlined: true },
];

export default function Home() {
  return (
    <main>
      <Navbar items={navItems} />
    </main>
  );
}
