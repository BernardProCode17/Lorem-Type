// Type for Child Component in the main element
type MainProps = {
   children: React.ReactNode
}
function MainElement({children}:MainProps){
   // Main Element
   return(
      <main className="body_main">
         {children}
      </main>
   )
} export default MainElement