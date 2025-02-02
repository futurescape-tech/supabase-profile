import { getAnchor, removeAnchor } from './CustomHTMLElements.utils'

const H3 = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h3 id={anchor} className="group flex gap-1 items-center">
      {removeAnchor(children)}
      {anchor && (
        <a href={link} className="opacity-0 group-hover:opacity-100 transition">
          #
        </a>
      )}
    </h3>
  )
}
export default H3
