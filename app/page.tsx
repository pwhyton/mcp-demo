export default function Page() {
  const cards = [
    'Portfolio Summary',
    'Firms',
    'Advisers',
    'Clients',
    'Accounts',
    'Reports'
  ];

  return (
    <main style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>McLaren Capital Adviser Dashboard</h1>
      <p>Next.js dashboard designed for Finio MCP integrations.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {cards.map(card => (
          <div key={card} style={{border:'1px solid #ddd',padding:16,borderRadius:8}}>
            <h3>{card}</h3>
            <p>Connect to corresponding Finio MCP tool.</p>
          </div>
        ))}
      </div>
    </main>
  )
}
