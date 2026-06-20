import Link from "next/link";

export default function Home(){
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        Todo Application 

        <button onClick={() => {
          router.push("/signin")
        }}>Sigin</button>
        <br />
        <Link className="text-md border m-2" href="/signin">Login</Link>
        <br />
        <Link href="/signup">Signup</Link>
      </div>

    </div>
  )
}