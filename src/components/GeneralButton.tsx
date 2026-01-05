const GeneralButton: React.FC<GeneralButtonProps> = ({
  children,
  onClick,
  type = 'button',
  ...rest
}) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default GeneralButton

type GeneralButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}  & React.ButtonHTMLAttributes<HTMLButtonElement>
