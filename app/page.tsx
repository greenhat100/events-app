"use client"
import dynamic from "next/dynamic"

const defaultPosition: [number, number] = [51.505, -0.09]

const Map = dynamic(() => import('./components/Map'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="w-full">
     <Map />
    </main>
  )
}
