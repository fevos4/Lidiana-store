import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto max-w-[1360px] px-5 md:px-12 lg:px-16', className)}>{children}</div>
}
