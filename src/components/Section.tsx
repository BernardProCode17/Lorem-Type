
function Section({title, Component, elementSelector, titleClass}) {

   return(
      <section className={`section_${elementSelector}`}>
         <h2 className={`${titleClass}_h2`}>{title}</h2>
         <Component/>
      </section>
   )
}
export default Section;