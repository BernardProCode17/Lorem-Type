type MainProps = {
   components: React.ReactNode
}
function Main({children}:MainProps){
   return(
      <main className="body_main">
         {children}
      </main>
   )
} export default Main