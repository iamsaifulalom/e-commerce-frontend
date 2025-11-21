import KPICard from '@/components/features/admin/KPICard'
import ListSection from '@/components/features/admin/ListSection'
import { ChartLineMultiple } from '@/components/features/admin/S'

export default function Dashboard() {
  return (
    <div className='w-full h-full flex flex-col md:flex-row gap-5'>
      {/* Summary Cards with total customer , revinew and expences */}
      {/* graph Last Year vs. Current Year*/}
      {/* top selling products*/}

      <div className='flex-1 flex flex-col gap-16'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
          <KPICard
            title='Total customer'
            value={900}
            percentageChange={30}
            changeDescription='This motnth'
          />
          <KPICard
            title='Total revinew'
            value={"900k"}
            percentageChange={10}
            changeDescription='This motnth'
            className='bg-[#EFFCEF]'
          />
          <KPICard
            title='Total expenses'
            value={900}
            percentageChange={-40}
            changeDescription='This motnth'
            className='bg-[#EFF6FC]'
          />
        </div>
        <ChartLineMultiple/>
        <h1 className='text-lg font-semibold'> Top selling products </h1>
      </div>
      
      <div className='wfull md:w-60 flex flex-col gap-4'>
        <ListSection
          title='Top countries by sale'
          items={[{
            imageFallback: 'cn',
            imageUrl: "https://github.com/shadcn.png",
            title: 'Nike shos',
            value: '$400',
          }]}
        />
        <ListSection
          title='Top custommers'
          actionText='Sell all'
          actionHref='/custommers'
          items={[{
            description: 'User added data',
            imageFallback: 'cn',
            imageUrl: "https://github.com/shadcn.png",
            title: 'Nike shos',
            value: '$400',
            showBadge: true
          }]}
        />
        <ListSection
          title='Recent orders'
          actionText='Sell all'
          actionHref='/orders'
          items={[{
            description: 'By karim',
            imageFallback: 'cn',
            imageUrl: "https://github.com/shadcn.png",
            title: 'Nike shos',
            value: '$400'
          }]}
        />

      </div>
    </div>
  )
}
