// Section Parameter types
type sectionProps = {
   title?: string;
   Component: React.ComponentType | React.ComponentType[]; //Allow the Component prop to an array
   elementSelector: string;
   titleClass?:string
}
function Section({title, Component, elementSelector, titleClass}:sectionProps) {

   return(
      <section className={`section_${elementSelector}`}>
         <h2 className={`${titleClass}_h2`}>{title}</h2>
         {/* Loops of the Components if it's an array */}
         {Array.isArray(Component) ? Component.map((Module,index)=> <Module key={index}/>) : <Component/>}
      </section>
   )
}
export default Section;