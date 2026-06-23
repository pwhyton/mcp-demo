export function AumChart(){
 const bars=[45,80,65,90,55]
 return (
  <div className='bg-white p-6 rounded-xl shadow'>
   <h3 className='font-semibold mb-4'>AUM by Adviser</h3>
   <div className='flex items-end gap-3 h-40'>
    {bars.map((b,i)=><div key={i} style={{height:`${b}%`}} className='flex-1 bg-slate-400 rounded-t'/>) }
   </div>
  </div>
 )
}
