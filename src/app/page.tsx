import Image from 'next/image'
import UserForm from '../components/@formdata/UserForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-center font-mono  flex">
        <UserForm></UserForm>
      </div>
    </main>
  )
}
