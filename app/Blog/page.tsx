"use client"
import { myframework } from '@/helpers/interface';
import { parse } from 'path';
import Navebar from '../components/navebar/Navebar';
import "./style8.css";
const Framework: React.FC = () => {
  return (
    <>




      <div className='bigblog' >
        <h1>What's in your mind.?</h1>
        <div className='blogDiv'><br />
          <h3>Share your thoughts</h3><br /><br /><br />
          <input className='container' type="text" placeholder='  type here...' />
           
          
        </div>
      </div>
    </>
  )
}

export default Framework;
