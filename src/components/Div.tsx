type divProps = {
   children?: React.ReactNode
   elementClass?: string
}
function Div({ children, elementClass}:divProps) {
   return (
      <div className={elementClass}>
         {children}
      </div>
   )
}
export default Div