export function DashboardCard({title,value}:{title:string,value:string}){
 return (
  <div className='rounded-xl bg-white p-6 shadow'>
   <div className='text-sm text-gray-500'>{title}</div>
   <div className='text-3xl font-bold'>{value}</div>
  </div>
 )
}
