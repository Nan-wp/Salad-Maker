import Sidebar from '@/components/Sidebar'
import React from 'react'
import RecipePage from './component/RecipePage'

export default function page() {
  return (
    <div className="grid grid-cols-12">
      <Sidebar/>
      <RecipePage/>
    </div>
  )
}
