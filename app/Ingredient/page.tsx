import Sidebar from '@/components/Sidebar'
import React from 'react'
import IngredientPage from './component/IngredientPage'

export default function page() {
  return (
    <div className="grid grid-cols-12">
      <Sidebar/>
      <IngredientPage/>
    </div>
  )
}
