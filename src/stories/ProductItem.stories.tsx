import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductItem } from '../components/ProductItem'
import { Product } from '@/interfaces/product.interface'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: ProductItem,
  title: 'Component/ProductItem',
} as ComponentMeta<typeof ProductItem>

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
)
export const DefaultProductItem = Template.bind({})
const mock: Product = {
  id: 'product-1',
  name: 'Grape Fruit',
  image: [
    'https://images.unsplash.com/photo-1621277907087-edd48920f937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  ],
  isHairTreatment: true,
  isProduct: true,
}
DefaultProductItem.args = { ...mock }
