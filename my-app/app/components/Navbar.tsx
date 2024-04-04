import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useReducer, useRef, useState } from 'react';
import { NavItems, SingleNavItem } from './types';
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';
import { media } from './utils/media';
import { useNewsletterModalContext } from './contexts/newsletter-modal.context';

type NavbarProps = {items: NavItems };
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
    const router = useRouter();
    const lastRoute = useRef('');

    return (
        <Content>
          <NextLink href="/" passHref>
          </NextLink>
          <NavItemList>
            {items.map((singleItem) => (
              <NavItem key={singleItem.href} {...singleItem} />
            ))}
          </NavItemList>
        </Content>
    );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
    const { setIsModalOpened } = useNewsletterModalContext();
  
    function showNewsletterModal() {
      setIsModalOpened(true);
    }
  
    if (outlined) {
      return <CustomButton onClick={showNewsletterModal}>{title}</CustomButton>;
    }
  
    return (
      <NavItemWrapper outlined={outlined}>
        <NextLink href={href} passHref>
          <a>{title}</a>
        </NextLink>
      </NavItemWrapper>
    );
  }

const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

const NavItemList = styled.div`
    display: flex;
    list-style: none;

    ${media('<desktop')} {
        display: none;
    }
`;

const LogoWrapper = styled.a`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: ${(p) => (p.outlined ? 'rgb(var(--primary))' : 'transparent')};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:hover {
    background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)')};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;

