import { colors } from '@/app/theme'
import Link from 'next/link'
import React from 'react'
import { NavbarProps } from 'sanity';
import { CSSProperties } from 'styled-components'
const linkStyle:CSSProperties={
    textDecoration:"none",
    color:colors.brand.primaryDark
};

const studioNavbar = (props:NavbarProps) => {
  return (
    <div>
      <div style={{
        padding:"0.6rem 2rem",
        display:"flex",
        gap:"2rem"
      }}>
        <Link href="/" style={linkStyle}>
            Back Home
        </Link>
        <Link href="/products" style={linkStyle}>
            View Products
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default studioNavbar
