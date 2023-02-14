import { renderHook, cleanup, act, waitFor } from '@testing-library/react'
import { useProductStore } from '../../stores/productStore'
import { Product } from '@/interfaces/product.interface'

afterEach(cleanup)
beforeEach(async () => {
  await waitFor(() => {
    const { result } = renderHook(() => useProductStore())
    result.current.reset()
  })
})

describe('Test Stores', () => {
  const mockProduct: Product = {
    id: 'test',
    image: ['image'],
    price: 120,
    name: 'test',
    isProduct: true,
  }

  it('Should init total selected product as 0', () => {
    const { result } = renderHook(() => useProductStore())
    expect(result.current.total).toBe(0)
  })

  it('Should init total price as 0', () => {
    const { result } = renderHook(() => useProductStore())
    expect(result.current.totalPrice).toBe(0)
  })

  it('Should be able to increase product', () => {
    const { result } = renderHook(() => useProductStore())
    act(() => {
      result.current.addItem(mockProduct)
    })
    expect(result.current.total).toBe(1)
  })

  it('Should be able to decrease product', () => {
    const { result } = renderHook(() => useProductStore())
    expect(result.current.total).toBe(0)
    act(() => {
      result.current.addItem(mockProduct)
    })
    expect(result.current.total).toBe(1)
    act(() => {
      result.current.removeItem(mockProduct)
    })
    expect(result.current.total).toBe(0)
  })

  it('Should be able to count total price', () => {
    const { result } = renderHook(() => useProductStore())
    expect(result.current.totalPrice).toBe(0)
    act(() => {
      result.current.addItem(mockProduct)
    })
    expect(result.current.totalPrice).toBe(120)
    act(() => {
      result.current.addItem(mockProduct)
    })
    expect(result.current.totalPrice).toBe(240)
    act(() => {
      result.current.removeItem(mockProduct)
    })
    expect(result.current.totalPrice).toBe(120)
  })
})
