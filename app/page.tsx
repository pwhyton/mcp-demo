import { DashboardCard } from '../components/DashboardCard'
import { AumChart } from '../components/AumChart'

export default function Page(){
 return (
  <main className='p-10'>
   <h1 className='text-4xl font-bold mb-2'>McLaren Capital</h1>
   <p className='mb-8 text-slate-600'>Finio Adviser Dashboard</p>

   <div className='grid md:grid-cols-4 gap-4 mb-8'>
    <DashboardCard title='Total AUM' value='£125m' />
    <DashboardCard title='Clients' value='842' />
    <DashboardCard title='Advisers' value='24' />
    <DashboardCard title='Accounts' value='1,563' />
   </div>

   <div className='grid md:grid-cols-2 gap-6'>
    <AumChart />
    <div className='bg-white rounded-xl shadow p-6'>
      <h3 className='font-semibold mb-4'>Finio MCP Integrations</h3>
      <ul>
       <li>Portfolio Summary</li>
       <li>Firms</li>
       <li>Advisers</li>
       <li>Clients</li>
       <li>Accounts</li>
       <li>Reports</li>
      </ul>
    </div>
   </div>
  </main>
 )
}
