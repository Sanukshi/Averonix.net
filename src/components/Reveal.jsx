import { useInView } from '../hooks'

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const [ref, visible] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
