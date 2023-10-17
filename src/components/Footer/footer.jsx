
import Image from 'next/image'
import blanketIcon from '../../../public/favicon.ico'
import Link from 'next/link'

function Footer() {
    return (
        <section className="container mx-auto ">
            <div className=" flex gap-3 items-center">
                <Link href='/'>
                    <Image src={blanketIcon} alt="next icon" width={50} height={50} />
                </Link>
                <p className='text-2xl font-bold '>KIRIN LOTIN</p>
            </div>
            <p className=" text-[#aaa] mt-6">Ko‘pincha bizda kirill yoki lotin alifbosidagi matnlarni kirilldan-lotinga, lotindan-kirillga o‘girishga ehtiyoj boʻladi.
                Ushbu kiril lotin, lotin kiril onlayn translit dasturi o’zbek tilidagi har qanday matnlarni hech qanday muammosiz hal qilishingizda sizga yordam beradi.
                Bu dasturning afzalligi shundaki, simvollar soni cheklanmangan, hamda qaysi tilga o’girishni dasturni o’zi aniqlaydi.
                Butun bir maqolani  yoki matnni birinchi bo’sh katakka qo’ysangiz, bir necha soniyadan soʻng tayyor natijani qo’lga kiritasiz.
                Hozircha sinov tartibida ishlayotganligi sababli, natijani tekshirib oling.
                Ba’zi bir kamchiliklar bo’lsa administratorga murojat qiling yoki izoh yozib qoldiring.</p>
            <p className='mt-6 text-center text-sm '>© Kiril to lotin, 2023</p>
        </section >
    )
}

export default Footer