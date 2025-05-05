import React from 'react'
import { ProductHeader } from '@features/components/ProductHeader'
import { ProductMain } from '@features/components/ProductMain'
import { CategorySlider } from '@features/components/CategorySlider'
import { ProductGridCard } from '@features/components/ProductGridCard'

export const ProductPage = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <ProductHeader />
        <ProductMain />
        <CategorySlider/>
        <ProductGridCard/>
      </div>
    </>
  )
}
