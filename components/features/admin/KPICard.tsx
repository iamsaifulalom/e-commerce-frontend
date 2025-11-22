'use client'

import KPIDownIndicator from '@/components/ui/KPIDownIndicator'
import KPIUpIndicator from '@/components/ui/KPIUpIndicator'
import { cn } from '@/lib/utils'

interface KPICardProps {
  className?: string
  title: string
  value: string | number
  percentageChange: number
  changeDescription?: string
}

export default function KPICard({
  className = '',
  title,
  value,
  percentageChange,
  changeDescription,
}: KPICardProps) {
  return (
    <div className={ cn("bg-[#E6F5F9] p-4 h-[145px] rounded-xl" , className)}>
      <p className='text-3xl font-bold'>{value}</p>
      <p className='text-muted-foreground mt-1 text-xs'>{title}</p>
      {(percentageChange || changeDescription ) && (
        <div className='flex mt-3 justify-between items-end text-sm'>
          <div>
            {percentageChange && <p className='font-semibold'>{percentageChange}%</p>}
            {changeDescription && <p className='text-xs text-muted-foreground'>{changeDescription}</p>}
          </div>
          <div>{percentageChange > 0 ? <KPIUpIndicator/>: <KPIDownIndicator/>}</div>
        </div>
      )}
    </div>
  )
}
