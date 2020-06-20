import React from 'react'
import logoMoovin from '../../assets/logo-moovin.svg'

import './styles.scss'

const Header: React.FC = () => {
  return (
    <header>
				<img alt='Logo da Moovin' src={logoMoovin} />
		</header>
  )
}

export default Header;