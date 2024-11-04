import { useCounterStore } from './store/useCounterStore'
import { Button } from './ui/Button'

export const App = () => {
  const { count, increment, decrement, reset } = useCounterStore(store => store)

  return (
    <main className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-xl">
        Count: <span className="font-bold">{count}</span>
      </h1>
      <div className="flex items-center gap-x-1">
        <Button
          width={50}
          title="+"
          color="#fff"
          backgroundColor="#09f"
          onPress={() => increment(5)}
        />
        <Button
          width={50}
          title="0"
          color="#fff"
          backgroundColor="#09f"
          onPress={reset}
        />
        <Button
          width={50}
          title="-"
          color="#fff"
          backgroundColor="#09f"
          onPress={decrement}
        />
      </div>
    </main>
  )
}
