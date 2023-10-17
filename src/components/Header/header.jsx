import Image from 'next/image'
import blanketIcon from '../../../public/favicon.ico'
import Link from 'next/link'

function Header() {
    return (
        <section className="container mx-auto py-3">
            <div className=" flex gap-3 items-center">
                <Link href='/'>
                    <Image src={blanketIcon} alt="next icon" width={50} height={50} />
                </Link>
                <p className='text-2xl font-bold '>KIRIN LOTIN</p>
            </div>

        </section >
    )
}

export default Header