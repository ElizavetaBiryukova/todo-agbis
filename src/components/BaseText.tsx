interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
  React.DOMAttributes<HTMLDivElement> {
  innerref?: React.RefObject<HTMLDivElement>
}

export const BaseText = (props: Props) => {
  return (
    <div
      ref={props.innerref}
      {...props}
      className={`text-dark text-base ${props.className}`}
    >
      {props.children}
    </div>
  )
}
