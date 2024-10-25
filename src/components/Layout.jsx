
export default function Layout({children}) {
  return (
    <div className="w-screen h-screen bg-black text-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
        {children}
    </div>
    </div>
  )
}
