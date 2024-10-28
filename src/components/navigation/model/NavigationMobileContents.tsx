import React from 'react'

interface NavigationMobileContentsProps {
  navItems: string[]
  sectionRefs: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null
  }>
}

const NavigationMobileContents = ({ navItems, sectionRefs }: NavigationMobileContentsProps) => {
  return <div>NavigationMobileContents</div>
}

export default NavigationMobileContents
