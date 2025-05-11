import { FaDiscord, FaTelegram } from "react-icons/fa";
import X from './assets/X.png'
import cryptofamradio from './assets/cryptofamradio.png'
import suiaccelerator from './assets/suiaccelerator.jpg'
import logo from './assets/logo.png'


const Footer = ({ id, image, name, price }) => {
    return (
      <footer id="footer" className="mt-5 p-6 text-center bg-black text-white ">

        <img src={logo} alt="Harmony Hub" className="size-30" />

        <div className="flex flex-col-reverse md:flex-row flex-wrap gap-20 ">

          <div>

            <div className=' pb-10'>
              
              <p className="text-left py-2 font-bold"> Partners</p>

              <div className="flex gap-5 ml-3">

                <img src={suiaccelerator} alt="suiaccelerator" className='w-40'/>
                <img src={cryptofamradio} alt="cryptofamradio" className="size-25"/>

              </div>

            </div>

            <div className="flex justify:around sm:justify-around gap-10 socials">

              <a href="https://x.com/HarmonyHubonSui"> <img src={X} alt="X" className="size-10 cursor-pointer"/> </a>

              <FaDiscord className="size-10 cursor-pointer"/>
              
              <a href="https://t.co/kPITDQjoNp"> <FaTelegram className="size-10 cursor-pointer"/> </a>
              

            </div>

          </div>

          <div className="flex flex-col gap-3">

            <span className="glow text-md font-bold">Coming Soon</span>

            <ol className="list-disc flex flex-col gap-4 list-number text-left ml-15">
              
              <li>Melody Mints</li>
              <li>Sound Stream</li>
              <li>Chord Chollective</li>

            </ol>

          </div>

        </div>

        <p className="mt-9">© 2025 Harmony Hub | All Rights Reserved</p>

      </footer>
    )

}

export default Footer;