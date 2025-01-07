import React from 'react'
import { ReactSVG } from 'react-svg'
interface LogoProps {
  size: number;
  additionalClassName?: string;
}
const Logo: React.FunctionComponent<LogoProps> = (
  {
    size,
    additionalClassName
  }
) => {
  return (
    <ReactSVG src='/src/assets/svg/Logo de OfficeManager V2 plano.svg'
      beforeInjection={(svg) => {
        svg.setAttribute('style', `width: ${size}px; height:${size}px`)
      }} className={`[&_svg]:fill-haiti-950 dark:[&_svg]:fill-haiti-50 self-center ${additionalClassName}`}></ReactSVG>
  )
};

export default Logo;
