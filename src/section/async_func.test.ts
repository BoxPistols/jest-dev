import { deley } from './async_func'

it('時間語後にメッセージを返す', async () => {
  const result = await deley('hello', 1000)
  expect(result).toBe('hello')
})

it('待機時間が足りていない', async () => {
  try {
    await deley('hello', -1)
  } catch (e: any) {
    expect(e.message).toBe('time must be greater than 0')
  }
})
